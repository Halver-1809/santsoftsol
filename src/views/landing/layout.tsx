import '../../css/style.css';
import Home from './page';
import BackgroundEffects from './components/background-effects';
import { Flex } from '@chakra-ui/react';

export default function HomePrincipal() {
  return (
    <BackgroundEffects>
      <Flex direction="column" minH="100vh" overflow="hidden">
        <Home />
      </Flex>  
    </BackgroundEffects>
  );
}
