import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import { jwtDecode } from 'jwt-decode';

interface GoogleUserInfo {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;

  nbf: number;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
  iat: number;
  exp: number;
  jti: string;
}

interface AuthContextType {
  user: GoogleUserInfo | null;
  setUser: (user: GoogleUserInfo) => void;

  removeUser: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<GoogleUserInfo | null>(null);

  function handleCredentialResponse(
    data: google.accounts.id.CredentialResponse
  ): void {
    setUser(jwtDecode(data.credential));
  }

  useEffect(() => {
    console.log(user);
  }, [user]);
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '80590708560-mc2n0881ikgski4tmddn89cfjbb46e0n.apps.googleusercontent.com',
      callback: (data) => handleCredentialResponse(data),
    });
  }, []);

  const storeUser = (newUser: GoogleUserInfo) => {
    setUser(newUser);
    // Store the token (e.g., in local storage)
  };

  const removeUser = () => {
    setUser(null);
    // Clear the token from storage
  };

  const contextValue: AuthContextType = {
    user,
    setUser: storeUser,
    removeUser,
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
