import React from 'react';
import { Icon } from '@chakra-ui/react';
import { MdLock } from 'react-icons/md';
import { useRoutes } from 'react-router-dom';

import SignInCentered from '@/views/auth/signIn';
import ErrorComponent from '@/views/error';
import HomeTwo from '@/views/landing/page-two';

const authRoutes: RoutesType[] = [
  {
    name: 'Iniciar sesión',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
  {
    name: 'Error',
    layout: '/auth',
    path: '*',
    component: <ErrorComponent />,
  },
/*   {
    name: 'hometwo',
    layout: '/auth',
    path: '/hometwoo',
    component: <HomeTwo />,
  } */
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
