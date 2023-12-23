import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';

interface UserDetails {
  Id: number;
  Name: string;
  IconUrl: string;
  Handle: string;
  RoleIds: number[];
  Contact: Record<string, any>;
  Version: number;
}

interface AuthContextType {
  user: UserDetails | null;
  refreshToken: string | null;
  authed: boolean;
  googleJWT: string | null;
  setUser: (user: UserDetails) => void;
  setGoogleJWT: (jwt: string) => void;
  setAuthed: (bool: boolean) => void;
  setRefreshToken: (token: string) => void;
  removeUser: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState<UserDetails | null>(null);
  const [googleJWT, setGoogleJWT] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  function handleCredentialResponse(
    data: google.accounts.id.CredentialResponse
  ): void {
    setGoogleJWT(data.credential);
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log(storedUser);
    const storedRefreshToken = localStorage.getItem('refreshToken');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setAuthed(true);
    }

    if (storedRefreshToken) {
      setRefreshToken(storedRefreshToken);
    }
  }, []);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '80590708560-mc2n0881ikgski4tmddn89cfjbb46e0n.apps.googleusercontent.com',
      callback: (data) => handleCredentialResponse(data),
    });
  }, []);

  const handleSetGoogleJWT = (jwt: string) => {
    setGoogleJWT(jwt);
  };

  const handleSetAuthed = (bool: boolean) => {
    setAuthed(bool);
  };

  const handleSetRefreshToken = (token: string) => {
    setRefreshToken(token);
    localStorage.setItem('refreshToken', token);
  };

  const storeUser = (newUser: UserDetails) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const removeUser = () => {
    setUser(null);
    setRefreshToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('refreshToken');
  };

  const contextValue: AuthContextType = {
    user,
    authed,
    setUser: storeUser,
    removeUser,
    refreshToken,
    googleJWT,
    setAuthed: handleSetAuthed,
    setRefreshToken: handleSetRefreshToken,
    setGoogleJWT: handleSetGoogleJWT,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
