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
import useAuth from '@/hooks/useAuth';
import logoHRBlack from '@/assets/img/landing/LogoSantsoflight.png';
import logoHRWhite from '@/assets/img/landing/LogoSantsofdark.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navbarIcon = useColorModeValue('gray.400', 'white');
  const navbarBg = useColorModeValue('#F9D47D', '#111c44');
  const { token } = useAuth();
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
              <ListItem>
                <Link
                  href="#home"
                  fontWeight="medium"
                  px={4}
                  py={3}
                  _hover={{
                    textDecoration: 'none',
                    color: 'lightbranding.200',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector('#home');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#migracion"
                  fontWeight="medium"
                  px={4}
                  py={3}
                  _hover={{
                    textDecoration: 'none',
                    color: 'lightbranding.200',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector('#migracion');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Stages
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#benefits"
                  fontWeight="medium"
                  px={4}
                  py={3}
                  _hover={{
                    textDecoration: 'none',
                    color: 'lightbranding.200',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector('#benefits');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Benefits
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#questions"
                  fontWeight="medium"
                  px={4}
                  py={3}
                  _hover={{
                    textDecoration: 'none',
                    color: 'lightbranding.200',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector('#questions');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Questions
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#testimonials"
                  fontWeight="medium"
                  px={4}
                  py={3}
                  _hover={{
                    textDecoration: 'none',
                    color: 'lightbranding.200',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector('#testimonials');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Testimonials
                </Link>
              </ListItem>
              <ListItem>
                <Button
                  variant="ghost"
                  bg="darkbrading.100"
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
