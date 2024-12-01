import React from 'react';
import {
  Navigate,
  useLocation,
  useNavigate,
  useRoutes,
} from 'react-router-dom';
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import DefaultAuth from '@/layouts/auth/components/Illustration';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import useForm from '@/hooks/useForm';
import useAuth from '@/hooks/useAuth';
import Input from '@/components/input/Input';

//images
import illustrationBackground from '@/assets/img/auth/auth.png';

function SignIn() {
  // Chakra color mode
  const location = useLocation();

  const textColor = useColorModeValue('darkbrading.500', 'white');
  const bgBtn = useColorModeValue('lightbranding.500', 'lightbranding.600');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const textBtn = useColorModeValue('white', 'darkbrading.500');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  let navbarFilter = 'none';
  let navbarBackdrop = 'blur(20px)';
  let navbarBg = useColorModeValue(
    'rgba(244, 247, 254, 0.2)',
    'rgba(11,20,55,0.5)',
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { login } = useAuth();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();


  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate('/pages/dashboard'); // Cambia "/ruta-destino" por la ruta a la que quieres ir
  };

  const searchParams = new URLSearchParams(location.search);
  let url = searchParams.get('url');

  if (localStorage.getItem('Authorization'))
    return <Navigate replace to={url || '/pages/dashboard'} />;

  return (
   <DefaultAuth
      illustrationBackground={illustrationBackground}
    >
      <Flex
        bg={navbarBg}
        filter={navbarFilter}
        backdropFilter={navbarBackdrop}
        backgroundPosition="center"
        maxW={{ base: '100%', md: 'max-content' }}
        w="100%"
        mx={{ base: 'auto', lg: '0px' }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: '30px', md: '60px' }}
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '40px', md: '14vh' }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Iniciar sesión
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            ¡Introduce tu email y contraseña para iniciar sesión!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: '100%', md: '420px' }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: 'auto', lg: 'unset' }}
          me="auto"
          mb={{ base: '20px', md: 'auto' }}
        >
          <FormControl>
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Correo<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="auth"
              fontSize="sm"
              ms={{ base: '0px', md: '0px' }}
              placeholder="example@domain.com"
              mb="24px"
              fontWeight="500"
              size="lg"
              register={register('email', {
                required: {
                  value: true,
                  message: 'Por favor ingresa el correo',
                },
                pattern: {
                  value: /^[A-Za-z.'-_]+@[A-Za-z.,-_]{4,}\.[A-Za-z.,-_]{2,}$/,
                  message: 'Email invalido',
                },
              })}
            />
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Contraseña<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Min. 8 caracteres"
                mb="24px"
                size="lg"
                type={show ? 'text' : 'password'}
                variant="auth"
                register={register('password', {
                  required: {
                    value: true,
                    message: 'Por favor ingresa la contraseña',
                  },
                })}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: 'pointer' }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            {/* <Flex justifyContent="space-between" align="center" mb="24px">
              <FormControl display="flex" alignItems="center">
                <Checkbox
                  id="remember-login"
                  colorScheme="brandScheme"
                  me="10px"
                />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  fontWeight="normal"
                  color={textColor}
                  fontSize="sm"
                >
                  Recordar usuario
                </FormLabel>
              </FormControl>
              <NavLink to="/">
                <Text
                  color={textColorBrand}
                  fontSize="sm"
                  w="124px"
                  fontWeight="500"
                >
                  ¿Has olvidado tu contraseña?
                </Text>
              </NavLink>
            </Flex> */}
            <Button
              fontSize="sm"
              color={textBtn}
              backgroundColor={bgBtn}
              _hover={{ background: 'lightbranding.400' }}
              fontWeight="bold"
              w="100%"
              h="50"
              mb="24px"
              onClick={() => navigate('/pages/dashboard')}
            >
              Iniciar sesión
            </Button>
          </FormControl>
          {/* <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              ¿Aún no estás registrado?
              <NavLink to="/">
                <Text
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Crear una cuenta
                </Text>
              </NavLink>
            </Text>
          </Flex> */}
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Volver a la página principal
              <Text
                color={textColorBrand}
                as="span"
                ms="5px"
                fontWeight="500"
                cursor='pointer'
                onClick={() => navigate('/home')}
              >
                Inicio
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Flex>
   </DefaultAuth>
  );
}

export default SignIn;
