import MobileMenu from './mobile-menu';
import {
  Button,
  Icon,
  useColorMode,
  useColorModeValue,
  Box,
  Flex,
  Link,
  UnorderedList,
  ListItem,
  Image,
} from '@chakra-ui/react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import logoHRBlack from '@/assets/img/landing/LogoSantsoflight.png';
import logoHRWhite from '@/assets/img/landing/LogoSantsofdark.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navbarIcon = useColorModeValue('lightbranding.500', 'darkbranding.200');
  const navbarBg = useColorModeValue('lightbranding.100', 'darkbranding.900');
  const navigate = useNavigate(); 
  
  const goToHomeTwo = () => {
    navigate('/auth/home-twoo'); 
  };
  return (
    <Box
      as="header"
      w="full"
      zIndex="30"
      position="fixed"
      top="0"
      bg={navbarBg}
    >
      <Box maxW="6xl" mx="auto" px={{ base: 4, sm: 6 }}>
        <Flex alignItems="center" justifyContent="space-between" h="20">
          <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              <Image
                src={colorMode === 'light' ? logoHRBlack : logoHRWhite}
                width={180}
                height={'auto'}
                alt="Logo"
              />
            </Flex>
          </Flex>

          {/* Navbar links */}
          <Flex display={{ base: 'none', md: 'flex' }} flexGrow={1}>
            <UnorderedList
              display="flex"
              flexGrow={1}
              justifyContent="flex-end"
              alignItems="center"
              listStyleType="none"
              m={0}
              p={0}
            >
              {[
                { href: '#home', label: 'Home' },
                { href: '#services', label: 'Services' },
                { href: '#objectives', label: 'Objectives' },
                { href: '#questions', label: 'Questions' },
                { href: '#customers', label: 'Customers' },
                { href: '#contactform', label: 'Contact form' },
              ].map(({ href, label }) => (
                <ListItem key={href}>
                  <Link
                    href={href}
                    fontWeight="medium"
                    px={4}
                    py={3}
                    _hover={{
                      textDecoration: 'none',
                      color: 'lightbranding.200',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.querySelector(href);
                      section?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {label}
                  </Link>
                </ListItem>
              ))}
              <ListItem>
                <Button
                  variant="ghost"
                  bg="darkbranding.100"
                  p="0px"
                  minW="unset"
                  minH="unset"
                  h="25px"
                  w="max-content"
                >
                  <Link
                    href="#/home"
                    fontWeight="medium"
                    px={4}
                    py={3}
                    _hover={{
                      textDecoration: 'none',
                      color: 'lightbranding.200',
                    }}
                  >
                    <Icon
                      m="10px"
                      h="18px"
                      w="18px"
                      color={navbarIcon}
                      as={colorMode === 'light' ? IoMdMoon : IoMdSunny}
                    />
                  </Link>
                </Button>
              </ListItem>
            </UnorderedList>
          </Flex>
          <MobileMenu />
        </Flex>
      </Box>
    </Box>
  );
}
