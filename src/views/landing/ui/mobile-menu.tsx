import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  Link,
  useColorModeValue,
  useColorMode,
  Button,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import useAuth from '@/hooks/useAuth';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
      onClose();
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [mobileNavOpen, onClose]);

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
      onClose();
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [mobileNavOpen, onClose]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setMobileNavOpen(false);
    onClose();
  };

  const { token } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  // Chakra Color Mode
  const navbarIcon = useColorModeValue('gray.400', 'white');

  const navbarBg = useColorModeValue('darkbrading.50', 'lightbranding.600');

  return (
    <Box display={{ md: 'none' }}>
      <IconButton
        ref={trigger}
        aria-label="Toggle mobile menu"
        icon={mobileNavOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={() => {
          setMobileNavOpen(!mobileNavOpen);
          onToggle();
        }}
        variant="ghost"
        colorScheme="gray"
        color={useColorModeValue('gray.300', 'gray.200')}
        _hover={{ color: useColorModeValue('gray.200', 'gray.100') }}
      />

      <Collapse in={isOpen} animateOpacity>
        <Box
          ref={mobileNav}
          position="absolute"
          top="100%"
          left="0"
          w="full"
          zIndex="20"
          bg={navbarBg}
          px={4}
          py={2}
        >
          <Flex direction="column" align="center">
            <Link
              href="#home"
              fontWeight="medium"
              color="purple.600"
              py={2}
              onClick={(e) => handleLinkClick(e, '#home')}
              _hover={{ color: 'gray.200' }}
            >
              Inicio
            </Link>
            <Link
              href="#services"
              fontWeight="medium"
              color="purple.600"
              py={2}
              onClick={(e) => handleLinkClick(e, '#services')}
              _hover={{ color: 'gray.200' }}
            >
              Servicios
            </Link>
            <Link
              href="#benefits"
              fontWeight="medium"
              color="purple.600"
              py={2}
              onClick={(e) => handleLinkClick(e, '#benefits')}
              _hover={{ color: 'gray.200' }}
            >
              Beneficios
            </Link>
            <Link
              href="#testimonials"
              fontWeight="medium"
              color="purple.600"
              py={2}
              onClick={(e) => handleLinkClick(e, '#testimonials')}
              _hover={{ color: 'gray.200' }}
            >
              Reseñas
            </Link>
            {token ? (
              <Link
                href="#/pages/dashboard"
                fontWeight="medium"
                px={4}
                py={3}
                color="purple.600"
                _hover={{
                  textDecoration: 'none',
                  color: 'lightbranding.200',
                }}
              >
                Panel principal
              </Link>
            ) : (
              <Link
                href="#/auth/sign-in"
                fontWeight="medium"
                px={4}
                py={3}
                color="purple.600"
                _hover={{
                  textDecoration: 'none',
                  color: 'lightbranding.200',
                }}
              >
                Iniciar sesión
              </Link>
            )}
            <Box>
                <Button
                  variant="ghost"
                  bg="darkbrading.100"
                  p="0px"
                  minW="unset"
                  minH="unset"
                  h="25px"
                  w="max-content"
                  onClick={toggleColorMode}
                >
                  <Icon
                    m="10px"
                    h="18px"
                    w="18px"
                    color={navbarIcon}
                    as={colorMode === 'light' ? IoMdMoon : IoMdSunny}
                  />
                </Button>
              </Box>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
}
