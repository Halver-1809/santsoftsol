import { useNavigate } from 'react-router-dom';
import { Button, Text, Image, Flex, useColorModeValue } from '@chakra-ui/react';

import error from '@/assets/img/others/error.png';

export const ErrorComponent = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    const redirectTo = localStorage.getItem('Authorization')
      ? '/pages/dashboard'
      : '/';
    navigate(redirectTo, { replace: true });
  };

  const textColor = useColorModeValue('secondaryGray.900', 'white');

  return (
    <Flex direction="column" align="center" pt={{ sm: '125px', lg: '75px' }}>
      <Image
        src={error}
        w="400px"
        maxW="90%"
        mt={{ base: '4vh', lg: '20vh' }}
        mb="10px"
      />
      <Text
        color={textColor}
        fontSize={{ base: '40px', lg: '46px' }}
        fontWeight="700"
        mb="30px"
        textAlign={{ base: 'center', md: 'start' }}
      >
        Ah, vaya. No encontramos esa página.
      </Text>
      <Flex align="center" direction={{ base: 'column', md: 'row' }}>
        <Text
          color={textColor}
          fontWeight="500"
          fontSize={{ base: 'md', md: 'lg' }}
          me="4px"
        >
          Quizás sea mejor que comiences desde nuestra página de inicio...
        </Text>
        <Button colorScheme="teal" onClick={handleBackHome}>
          Regresar al inicio
        </Button>
      </Flex>
    </Flex>
  );
};

export default ErrorComponent;
