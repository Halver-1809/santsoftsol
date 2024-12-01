 

import { NavLink, useLocation } from 'react-router-dom';
// chakra imports
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { FaCircle } from 'react-icons/fa';
import { MdCircle } from 'react-icons/md';
import React from 'react';
import useAuth from '@/hooks/useAuth';

export function SidebarLinks(props: {
  onClick: any;
  routes: RoutesType[];
  [x: string]: any;
}) {
  //   Chakra color mode
  let location = useLocation();
  let activeColor = useColorModeValue('darkbrading.500', 'darkbrading.500');
  let inactiveColor = useColorModeValue('darkbrading.500', 'darkbrading.500');
  let activeIcon = useColorModeValue('lightbranding.500', 'lightbranding.500');
  let textColor = useColorModeValue('darkbrading.500', 'darkbrading.500');

  const { routes, hovered, mini, onClick } = props;

  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes: RoutesType[] ) => {
    return routes
      .map((route, key) => {
        if (
          route.path === '/analytics'
        ) {
          return null;
        }
        if (route.collapse && route.items) {
        

          return (
            <Accordion allowToggle key={key}>
              <AccordionItem maxW="100%" border="none" key={key}>
                <AccordionButton
                  display="flex"
                  alignItems="left"
                  justifyContent="left"
                  _hover={{
                    bg: activeRoute(route.path.toLowerCase())
                      ? 'linear-gradient(45deg, #00, transparent)'
                      : 'unset',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  borderRadius="8px"
                  bg={'transparent'}
                  ms={0}
                  mb={'10px'}
                  pl={1}
                  background={
                    activeRoute(route.path.toLowerCase())
                      ? 'linear-gradient(45deg, #ffffff3d, transparent)'
                      : 'unset'
                  }
                >
                  {route.icon ? (
                    <Flex
                      align="center"
                      justifyContent={
                        mini === false
                          ? 'space-between'
                          : mini === true && hovered === true
                          ? 'space-between'
                          : 'center'
                      }
                      w="100%"
                      alignItems={'center'}
                    >
                      <HStack
                        mb="6px"
                        spacing={
                          activeRoute(route.path.toLowerCase())
                            ? '22px'
                            : '26px'
                        }
                      >
                        <Flex
                          w="100%"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Box
                            color={
                              activeRoute(route.path.toLowerCase())
                                ? activeIcon
                                : textColor
                            }
                            me={
                              mini === false
                                ? '12px'
                                : mini === true && hovered === true
                                ? '12px'
                                : '0px'
                            }
                            mt="6px"
                          >
                            {route.icon}
                          </Box>
                          <Text
                            display={
                              mini === false
                                ? 'block'
                                : mini === true && hovered === true
                                ? 'block'
                                : 'none'
                            }
                            me="auto"
                            color={
                              activeRoute(route.path.toLowerCase())
                                ? activeColor
                                : textColor
                            }
                            fontWeight={
                              activeRoute(route.path.toLowerCase())
                                ? 'bold'
                                : 'normal'
                            }
                            fontSize="md"
                          >
                            {route.name}
                          </Text>
                        </Flex>
                      </HStack>
                      <AccordionIcon
                        display={
                          mini === false
                            ? 'block'
                            : mini === true && hovered === true
                            ? 'block'
                            : 'none'
                        }
                        ms="auto"
                        color={'darkbrading.500'}
                        transform={route.icon ? null : 'translateX(-70%)'}
                      />
                    </Flex>
                  ) : (
                    <Flex
                      pt="0px"
                      pb="10px"
                      justify={'center'}
                      alignItems="center"
                      w="100%"
                    >
                      <HStack
                        spacing={
                          activeRoute(route.path.toLowerCase())
                            ? '22px'
                            : '26px'
                        }
                        ps={
                          mini === false
                            ? '34px'
                            : mini === true && hovered === true
                            ? '34px'
                            : '0px'
                        }
                      >
                        <Text
                          me="auto"
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeColor
                              : inactiveColor
                          }
                          fontWeight="500"
                          fontSize="sm"
                        >
                          {mini === false
                            ? route.name
                            : mini === true && hovered === true
                            ? route.name
                            : route.name[0]}
                        </Text>
                      </HStack>
                      <AccordionIcon
                        display={
                          mini === false
                            ? 'block'
                            : mini === true && hovered === true
                            ? 'block'
                            : 'none'
                        }
                        ms="auto"
                        color={'secondaryGray.600'}
                        transform={null}
                      />
                    </Flex>
                  )}
                </AccordionButton>
                <AccordionPanel
                  display={
                    mini === false
                      ? 'block'
                      : mini === true && hovered === true
                      ? 'block'
                      : 'flex'
                  }
                  justifyContent="center"
                  alignItems="center"
                  flexDirection={'column'}
                  // bg="blue"
                  pe={route.icon ? '14px !important' : '0px'}
                  py="0px"
                  ps={route.icon ? '14px !important' : '8px'}
                >
                  <List>
                    {route.icon
                      ? createLinks(route.items)
                      : createAccordionLinks(route.items)}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );
        } else {
          return (
            <NavLink to={route.layout + route.path} onClick={onClick} key={key}>
              {route.icon ? (
                <Flex
                  display="flex"
                  alignItems={
                    mini === false
                      ? 'left'
                      : mini === true && hovered === true
                      ? 'left'
                      : 'center'
                  }
                  justifyContent={
                    mini === false
                      ? 'left'
                      : mini === true && hovered === true
                      ? 'left'
                      : 'center'
                  }
                  _hover={{
                    bg: activeRoute(route.path.toLowerCase())
                      ? 'linear-gradient(45deg, #ffffff3d, transparent)'
                      : 'unset',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  borderRadius="8px"
                  w={{
                    sm: '100%',
                    xl: '100%',
                    '2xl': '95%',
                  }}
                  px={route.icon ? null : '0px'}
                  bg={'transparent'}
                  ms={0}
                  mb={'10px'}
                  background={
                    activeRoute(route.path.toLowerCase())
                      ? 'linear-gradient(45deg, #ffffff3d, transparent)'
                      : 'unset'
                  }
                >
                  <HStack
                    mb="6px"
                    spacing={
                      activeRoute(route.path.toLowerCase()) ? '22px' : '26px'
                    }
                  >
                    <Flex
                      w="100%"
                      alignItems="center"
                      justifyContent="center"
                      padding={'5px'}
                    >
                      <Box
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? activeIcon
                            : inactiveColor
                        }
                        me="12px"
                        mt="6px"
                      >
                        {route.icon}
                      </Box>
                      <Text
                        me="auto"
                        color={
                          location.pathname === route.layout + route.path
                            ? activeColor
                            : inactiveColor
                        }
                        fontWeight={
                          location.pathname === route.layout + route.path
                            ? 'bold'
                            : 'normal'
                        }
                      >
                        {mini === false
                          ? route.name
                          : mini === true && hovered === true
                          ? route.name
                          : ''}
                      </Text>
                    </Flex>
                  </HStack>
                </Flex>
              ) : (
                <ListItem ms={null}>
                  <Flex
                    ps={
                      mini === false
                        ? '34px'
                        : mini === true && hovered === true
                        ? '34px'
                        : '0px'
                    }
                    alignItems="center"
                    mb="13px"
                  >
                    <Icon
                      as={MdCircle}
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeColor
                          : inactiveColor
                      }
                      mr={'7px'}
                      fontSize={'5px'}
                    />
                    <Text
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeColor
                          : inactiveColor
                      }
                      fontWeight="500"
                      fontSize="sm"
                    >
                      {mini === false
                        ? route.name
                        : mini === true && hovered === true
                        ? route.name
                        : route.name[0]}
                    </Text>
                  </Flex>
                </ListItem>
              )}
            </NavLink>
          );
        }
      });
  };

  const createAccordionLinks = (routes: RoutesType[]) => {
    return routes.map((route: RoutesType, key: number) => {
      return (
        <NavLink to={route.layout + route.path} key={key}>
          <ListItem
            ms={
              mini === false
                ? '28px'
                : mini === true && hovered === true
                ? '28px'
                : '0px'
            }
            display="flex"
            alignItems="center"
            mb="10px"
            key={key}
          >
            <Icon w="6px" h="6px" me="8px" as={FaCircle} color={activeIcon} />
            <Text
              // display={
              //   mini === false
              //     ? 'block'
              //     : mini === true && hovered === true
              //     ? 'block'
              //     : 'none'
              // }
              color={
                activeRoute(route.path.toLowerCase())
                  ? activeColor
                  : inactiveColor
              }
              fontWeight={
                activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'
              }
              fontSize="sm"
            >
              {mini === false
                ? route.name
                : mini === true && hovered === true
                ? route.name
                : route.name[0]}
            </Text>
          </ListItem>
        </NavLink>
      );
    });
  };
  return <>{createLinks(routes)}</>;
}

export default SidebarLinks;
