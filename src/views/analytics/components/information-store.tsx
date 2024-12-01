import Card from '@/components/card/Card';
import { Box, Flex, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaClock, FaCalendarAlt, FaStopwatch, FaDollarSign, FaDatabase, FaHourglassHalf, FaRegClock, FaCalendar, FaHistory } from 'react-icons/fa';

interface InformationStoreProps {}

export const InformationStore: React.FC<InformationStoreProps> = () => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const cardBg = useColorModeValue('white', 'whiteAlpha.100');
  const cardHoverBg = useColorModeValue('gray.100', 'whiteAlpha.200');
  const iconColor = useColorModeValue('brand.500', 'white');

  return (
    <Card p="30px">

      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        gap={4}
      >
        {/* Card 1: Horarios de Trabajo */}
        <Card
          maxW="sm"
          borderRadius="10px"
          boxShadow="lg"
          mb={{ base: 2, md: 0 }}
          bg={cardBg}
          _hover={{ bg: cardHoverBg }}
        >
          <Box>
            <Flex align="center" mb="15px">
              <Icon as={FaDollarSign} color={iconColor} w={8} h={8} mr={3} />
              <Text color={textColor} fontSize="xl" fontWeight="600">
              Infotipos
              </Text>
            </Flex>
            <Text fontSize="md">Peso:</Text>
            <Text fontSize="md">Cantidad:</Text>
          </Box>
        </Card>
        
        <Card
          maxW="sm"
          borderRadius="10px"
          boxShadow="lg"
          bg={cardBg}
          _hover={{ bg: cardHoverBg }}
        >
          <Box>
            <Flex align="center" mb="15px">
              <Icon as={FaDatabase} color={iconColor} w={8} h={8} mr={3} />
              <Text color={textColor} fontSize="xl" fontWeight="600">
              Cluster Nomina
              </Text>
            </Flex>
            <Text fontSize="md">Peso:</Text>
            <Text fontSize="md">Cantidad:</Text>
          </Box>
          </Card>

          <Card
          maxW="sm"
          borderRadius="10px"
          boxShadow="lg"
          mb={{ base: 2, md: 0 }}
          bg={cardBg}
          _hover={{ bg: cardHoverBg }}
        >
          <Box>
            <Flex align="center" mb="15px">
              <Icon as={FaHourglassHalf} color={iconColor} w={8} h={8} mr={3} />
              <Text color={textColor} fontSize="xl" fontWeight="600">
              Cluster Tiempos
              </Text>
            </Flex>
            <Text fontSize="md">Peso:</Text>
            <Text fontSize="md">Cantidad:</Text>
          </Box>
        </Card>
      </Flex>
    </Card>
  );
};
