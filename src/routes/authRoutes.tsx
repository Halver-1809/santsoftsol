import React from 'react';

import { useRoutes } from 'react-router-dom';

import ErrorComponent from '@/views/error';

const authRoutes: RoutesType[] = [
  {
    name: 'Error',
    layout: '/auth',
    path: '*',
    component: <ErrorComponent />,
  },

];

console.log('AuthRoutes Rendered', authRoutes);


const AuthRoutes: React.FC = () => {
  const element = useRoutes(
    authRoutes.map(route => ({
      path: `${route.layout}${route.path}`,
      element: route.component,
    })),
  );

  return <>{element}</>;
};

export { authRoutes };
export default AuthRoutes;
