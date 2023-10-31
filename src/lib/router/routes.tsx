import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('@/lib/pages/home'));
const Posts = React.lazy(() => import('@/lib/pages/posts'));
export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
