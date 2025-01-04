import '../../css/style.css';
import Home from './page';
import { Flex } from '@chakra-ui/react';

export default function HomePrincipal() {
  return (
      <Flex direction="column" minH="100vh" overflow="hidden">
        <Home />
      </Flex>  
  );
}
