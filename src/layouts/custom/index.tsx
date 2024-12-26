import {
  Portal,
  Box,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import Footer from '@/components/footer/FooterAdmin';
import Navbar from '@/components/navbar/NavbarAdmin';
import Sidebar from '@/components/sidebar/Sidebar';
import { SidebarContext } from '@/contexts/SidebarContext';
import useAuth from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

export default function Dashboard(props: { [x: string]: any }) {
  const { ...rest } = props;
  const [fixed] = useState(false);
  const { role } = useAuth();
  const location = useLocation();
  const [mini, setMini] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);



  const getRoute = () => {
    return window.location.pathname !== '/pages/full-screen-maps';
  };

  const getActiveRoute = (routes: RoutesType[]): string => {
    let activeRoute = 'Panel Principal';
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].items);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  const getActiveNavbar = (routes: RoutesType[]): boolean => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbar(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].secondary;
        }
      }
    }
    return activeNavbar;
  };

  const getActiveNavbarText = (routes: RoutesType[]): string | boolean => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].name;
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routes: RoutesType[]): any => {
    return routes.map((route: RoutesType, key: number) => {
      if (route.layout === '/pages') {
        return (
          <Route path={`${route.path}`} element={route.component} key={key} />
        );
      } if (route.collapse) {
        return getRoutes(route.items);
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = 'ltr';
  const { onOpen } = useDisclosure();
  const bg = useColorModeValue('background.100', '#171717');

  return (
    <Box
      bg={bg}
      h="100vh"
      w="100vw"
      border="2px slid black"
      alignItems="flex-start"
      m="0px"
    >
      <SidebarContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
        <Sidebar
          hovered={hovered}
          setHovered={setHovered}
          mini={mini}
          routes={' '}
          display="none"
          {...rest}
        />
        <Box
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={
            mini === false
              ? {
                  base: '100%',
                  xl: 'calc( 100% - 290px )',
                }
              : mini === true && hovered === true
              ? { base: '100%', xl: 'calc( 100% - 290px )' }
              : { base: '100%', xl: 'calc( 100% - 120px )' }
          }
          maxWidth={
            mini === false
              ? {
                  base: '100%',
                  xl: 'calc( 100% - 290px )',
                }
              : mini === true && hovered === true
              ? { base: '100%', xl: 'calc( 100% - 290px )' }
              : { base: '100%', xl: 'calc( 100% - 120px )' }
          }
          transition="all 1s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, 1s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease-in-out"
        >
          <Portal>
            <Box>
              <Navbar
                hovered={hovered}
                setMini={setMini}
                mini={mini}
                onOpen={onOpen}
                brandText={getActiveRoute()}
                secondary={getActiveNavbar()}
                message={getActiveNavbarText()}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          {getRoute() ? (
            <Box
              mx="auto"
              p={{ base: '20px', md: '30px' }}
              pe="20px"
              minH="100vh"
              pt="50px"
            >
              <Routes>
                {getRoutes()}
                <Route
                  path="/"
                  element={<Navigate to="/pages/" replace />}
                />
              </Routes>
            </Box>
          ) : null}

          <Box>
            <Footer />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
}
