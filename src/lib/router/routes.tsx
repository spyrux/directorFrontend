import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('@/lib/pages/home'));
const Posts = React.lazy(() => import('@/lib/pages/posts'));
const Profile = React.lazy(() => import('@/lib/pages/profile'));
const JobBoard = React.lazy(() => import('@/lib/pages/jobBoard'));
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
];

export const privateRoutes: Array<PathRouteProps> = [];
