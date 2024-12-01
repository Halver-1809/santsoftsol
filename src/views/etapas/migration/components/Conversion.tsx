// Chakra imports
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from '@/components/card/Card';
import CircularProgress from '@/components/charts/CircularProgress';
import { VSeparator } from '@/components/separator/Separator';

export default function Conversion(props: { [x: string]: any }) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const cardColor = useColorModeValue('white', 'navy.700');
  return (
    <Card
      p="20px"
      py="30px"
      alignItems="center"
      flexDirection="column"
      w="100%"
      {...rest}
      textAlign="center"
    >
      <Text
        color={textColor}
        fontSize="2xl"
        fontWeight="700"
        mb="10px"
        mx="auto"
      >
        Migración de datos y acumulados
      </Text>
      <Text
        color="secondaryGray.600"
        fontSize="lg"
        fontWeight="500"
        maxW="250px"
        mx="auto"
        mb="10px"
      >
        Descubra sus estadísticas y obtenga más información sobre el estado actual de su sistema.
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        px="10px"
        mb="8px"
      />
      <Box w="125px" mx="auto" mb="10px">
        <CircularProgress title="Conversión" percentage={0} />
      </Box>
    </Card>
  );
}
