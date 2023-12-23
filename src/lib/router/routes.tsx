import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Root = React.lazy(() => import('@/lib/pages/root'));
const Home = React.lazy(() => import('@/lib/pages/home'));
const Profile = React.lazy(() => import('@/lib/pages/profile'));
const JobBoard = React.lazy(() => import('@/lib/pages/jobBoard'));
const JobsPage = React.lazy(() => import('@/lib/pages/jobsPage'));
const Bookmarks = React.lazy(() => import('@/lib/pages/bookmarks'));
export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Root />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/jobBoard',
    element: <JobBoard />,
  },
  {
    path: '/jobsPage',
    element: <JobsPage />,
  },
  {
    path: '/bookmarks',
    element: <Bookmarks />,
  },
];
