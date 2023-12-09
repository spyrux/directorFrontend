import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('@/lib/pages/home'));
const Posts = React.lazy(() => import('@/lib/pages/posts'));
const Profile = React.lazy(() => import('@/lib/pages/profile'));
const JobBoard = React.lazy(() => import('@/lib/pages/jobBoard'));
const JobsPage = React.lazy(() => import('@/lib/pages/jobsPage'));
export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/posts',
    element: <Posts />,
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
];

export const privateRoutes: Array<PathRouteProps> = [];
