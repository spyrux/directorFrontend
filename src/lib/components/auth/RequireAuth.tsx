import { Navigate } from 'react-router-dom';
import { useAuth } from '@/AuthProvider';
import { useEffect } from 'react';

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

const RequireAuth = ({ children, redirectTo = '/' }: PrivateRouteProps) => {
  // add your own authentication logic here
  const { authed } = useAuth();

  useEffect(() => {
    if (authed) {
      // Redirect to '/home' when authed is true
      <Navigate to="/home" />;
    }
  }, [authed]);

  return authed ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default RequireAuth;
