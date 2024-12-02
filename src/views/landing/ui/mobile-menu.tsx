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
  const { colorMode, toggleColorMode } = useColorMode();
  const { token } = useAuth();

  // Chakra Color Mode
  const navbarIcon = useColorModeValue('gray.400', 'white');
  const navbarBg = useColorModeValue('darkbrading.50', 'lightbranding.600');
  const hamburgerColor = useColorModeValue('gray.600', 'gray.300');  // Color oscuro para el hamburguesa

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

  return (
    <Box>
      <Flex align="center" justify="space-between" p={4}>
        <Box>
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
        </Box>

        {/* Menú hamburguesa */}
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
            color={hamburgerColor}  // Aplicamos el color oscuro aquí
            _hover={{ color: useColorModeValue('gray.200', 'gray.100') }}
          />
        </Box>
      </Flex>

      {/* Menú hamburguesa expandido */}
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
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#home');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              _hover={{ color: 'gray.200' }}
            >
              Home
            </Link>
            <Link
              href="#services"
              fontWeight="medium"
              color="purple.600"
              py={2}
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#services');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              _hover={{ color: 'gray.200' }}
            >
              Services
            </Link>
            <Link
              href="#objectives"
              fontWeight="medium"
              color="purple.600"
              py={2}
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#objectives');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              _hover={{ color: 'gray.200' }}
            >
              Objectives
            </Link>
            <Link
              href="#questions"
              fontWeight="medium"
              color="purple.600"
              py={2}
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#questions');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              _hover={{ color: 'gray.200' }}
            >
              Questions
            </Link>
            <Link
              href="#customers"
              fontWeight="medium"
              color="purple.600"
              py={2}
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#customers');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
               _hover={{ color: 'gray.200' }}
            >
              Customers
            </Link>
            <Link
              href="#contactform"
              fontWeight="medium"
              color="purple.600"
              py={2}
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#contactform');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}              
              _hover={{ color: 'gray.200' }}
            >
              Contact form
            </Link>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
}
