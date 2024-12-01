import '../../css/style.css';
import BackgroundEffects from './components/background-effects';
import { Flex } from '@chakra-ui/react';
import HomeTwo from './page-two';

export default function HomeSecundary() {
  return (
    <BackgroundEffects>
      <Flex direction="column" minH="100vh" overflow="hidden">
        <HomeTwo />
      </Flex>  
    </BackgroundEffects>
  );
}
