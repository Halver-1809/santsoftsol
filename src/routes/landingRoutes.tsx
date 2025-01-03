import React from 'react';
import { Icon } from '@chakra-ui/react';
import { MdLock } from 'react-icons/md';
import { useRoutes } from 'react-router-dom';

import ErrorComponent from '@/views/error';
import HomePrincipal from '@/views/landing/layout';
import HomeSecundary from '@/views/landing/layoutwo';

const landingRoutes = [
  {
    name: 'Página Inicio',
    layout: '/home',
    path: '/',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <HomePrincipal />,
  },
  {
    name: 'hometwo',
    layout: '/home',
    path: '/hometwoo',
    component: <HomeSecundary />,
  },
  {
    name: 'Error',
    layout: '/home',
    path: '*',
    component: <ErrorComponent />,
  }
];

const LandingRoutes: React.FC = () => {
  const element = useRoutes(
    landingRoutes.map(route => ({
      path: `${route.layout}${route.path}`,
      element: route.component,
    })),
  );

  return <>{element}</>;
};

export { landingRoutes };
export default LandingRoutes;
