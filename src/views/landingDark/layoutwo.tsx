import '../../css/style.css';
import { Flex } from '@chakra-ui/react';
import HomeTwo from './page-two';

export default function HomeSecundary() {
  return (
      <Flex direction="column" minH="100vh" overflow="hidden">
        <HomeTwo />
      </Flex>  
  );
}
