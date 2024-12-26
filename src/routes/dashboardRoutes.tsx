import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import {
  MdCreateNewFolder,
  MdDataExploration,
} from 'react-icons/md';
import ErrorComponent from '@/views/error';
import {  FaCheckCircle } from 'react-icons/fa';
import {  IoCopySharp, IoListSharp } from 'react-icons/io5';
import ReplicaStructure from '@/views/etapas/structure';
import MigrationData from '@/views/etapas/migration';
import VerifyData from '@/views/etapas/verify';
import CopyPersonalization from '@/views/etapas/copy';

const dashboardRoutes: RoutesType[] = [
  

  {
    name: 'Etapas',
    layout: '/pages/',
    path: '/main',
    icon: <Icon as={IoListSharp} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Migración de datos y acumulados',
        layout: '/pages',
        path: '/etapas/migration',
        component: <MigrationData />,
        secondary: true,
        icon: (
          <Icon as={MdDataExploration} width="20px" height="20px" color="inherit" />
        ),
      },
      {
        name: 'Verficación',
        layout: '/pages',
        path: '/etapas/verify',
        component: <VerifyData />,
        secondary: true,
        icon: (
          <Icon as={FaCheckCircle} width="20px" height="20px" color="inherit" />
        ),
      },
    ],
  },

];

const DashboardRoutes: React.FC = () => {

  const routeObjects: RouteObject[] = dashboardRoutes.map((route) => {
    return {
      path: `${route.layout}${route.path}`,
      element: route.component,
    };
  });

  const routeElements: RouteObject[] = [
    ...routeObjects,
    {
      path: '*',
      element: <ErrorComponent />,
    },
  ];

  const element = useRoutes(routeElements);
  return <>{element}</>;
};

export { dashboardRoutes };
export default DashboardRoutes;
