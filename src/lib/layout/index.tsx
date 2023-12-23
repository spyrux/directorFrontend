import { useEffect, type ReactNode } from 'react';

import Footer from './Footer';
import Header from './BaseHeader';
import { useAuth } from '@/AuthProvider';
import AuthorizedHeader from './AuthorizedHeader';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { authed } = useAuth();

  return (
    <div className="flex min-h-screen  flex-col ">
      {authed ? <AuthorizedHeader /> : <Header />}
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
