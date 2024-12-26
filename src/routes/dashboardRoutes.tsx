import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import ErrorComponent from '@/views/error';


const dashboardRoutes: RoutesType[] = [
  

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
