import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import {
  MdPerson,
  MdHome,
  MdCreateNewFolder,
  MdDataExploration,
} from 'react-icons/md';
import ErrorComponent from '@/views/error';
import DashboardCompanies from '@/views/dashboard';
import { BsListTask } from 'react-icons/bs';
import CompanyReports from '@/views/etapas/analisis';
import Analytics from '@/views/analytics';
import {  FaCheckCircle } from 'react-icons/fa';
import {  IoAnalyticsSharp, IoCopySharp, IoListSharp } from 'react-icons/io5';
import ReplicaStructure from '@/views/etapas/structure';
import MigrationData from '@/views/etapas/migration';
import VerifyData from '@/views/etapas/verify';
import CopyPersonalization from '@/views/etapas/copy';
import HomeTwo from '@/views/landing/page-two';

const dashboardRoutes: RoutesType[] = [
  
  {
    name: 'Panel principal',
    layout: '/pages',
    path: '/dashboard',
    component: <DashboardCompanies />,
    icon: (
      <Icon as={MdHome} width="20px" height="20px" color="inherit" />
    ),
  },
  {
    name: 'Etapas',
    layout: '/pages/',
    path: '/main',
    icon: <Icon as={IoListSharp} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Análisis',
        layout: '/pages',
        path: '/etapas/analisis',
        component: <CompanyReports />,
        secondary: true,
        icon: (
          <Icon as={IoAnalyticsSharp} width="20px" height="20px" color="inherit" />
        ),
      },
      {
        name: 'Réplica de estructuras y configuración',
        layout: '/pages',
        path: '/etapas/replica',
        component: <ReplicaStructure />,
        icon: (
          <Icon
            as={MdCreateNewFolder}
            width="20px"
            height="20px"
            color="inherit"
          />
        ),
        secondary: true,
      },
      {
        name: 'Copia personalizaciones',
        layout: '/pages',
        path: '/etapas/copy',
        component: <CopyPersonalization />,
        secondary: true,
        icon: (
          <Icon as={IoCopySharp} width="20px" height="20px" color="inherit" />
        ),
      },
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
  {
    name: 'Analytics',
    layout: '/pages',
    path: '/analytics',
    component: <Analytics />,
    icon: (
      <Icon as={BsListTask} width="20px" height="20px" color="inherit" />
    ),
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
