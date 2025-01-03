import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Box, useColorModeValue } from '@chakra-ui/react';
import { SidebarContext } from '@/contexts/SidebarContext';
import { landingRoutes } from '@/routes/landingRoutes';

export default function Landing() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const getRoute = () => {
    return window.location.pathname !== '/home/full-screen-maps';
  };

  const getRoutes = (routes: any[]): JSX.Element[] => {
    return routes.map((route: any, key: any) => {
      if (route.layout === '/home') {
        return (
          <Route path={`${route.path}`} element={route.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  const authBg = useColorModeValue('white', 'navy.900');
  document.documentElement.dir = 'ltr';

  return (
    <Box>
            <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Box
          bg={authBg}
          float="right"
          minHeight="100vh"
          height="100%"
          position="relative"
          w="100%"
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          {getRoute() ? (
            <Box mx="auto" minH="100vh">
              <Routes>
                {getRoutes(landingRoutes)}
                <Route
                  path="/"
                  element={<Navigate to="/home/default" replace />}
                />
              </Routes>
            </Box>
          ) : null}
        </Box>
        </SidebarContext.Provider>

    </Box>
  );
}
