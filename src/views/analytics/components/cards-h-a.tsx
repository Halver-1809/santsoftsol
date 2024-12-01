import Card from '@/components/card/Card';
import { Box, Flex, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaClock, FaCalendarAlt, FaStopwatch } from 'react-icons/fa';

interface CardsHoursProps {}

export const CardsHour: React.FC<CardsHoursProps> = () => {
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
              <Icon as={FaClock} color={iconColor} w={8} h={8} mr={3} />
              <Text color={textColor} fontSize="xl" fontWeight="600">
                Horarios de Trabajo
              </Text>
            </Flex>
            <Text fontSize="md">53 horarios de trabajo</Text>
          </Box>
        </Card>

        {/* Card 2: Ausentismos por días */}
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
              <Icon as={FaCalendarAlt} color={iconColor} w={8} h={8} mr={3} />
              <Text color={textColor} fontSize="xl" fontWeight="600">
                Ausentismos por días
              </Text>
            </Flex>
            <Text fontSize="md">59 ausentismos por días</Text>
          </Box>
        </Card>

        {/* Card 3: Ausentismos por horas */}
        <Card
          maxW="sm"
          borderRadius="10px"
          boxShadow="lg"
          bg={cardBg}
          _hover={{ bg: cardHoverBg }}
        >
          <Box>
            <Flex align="center" mb="15px">
              <Icon as={FaStopwatch} color={iconColor} w={8} h={8} mr={3} />
              <Text color={textColor} fontSize="xl" fontWeight="600">
                Ausentismos por horas
              </Text>
            </Flex>
            <Text fontSize="md">11 ausentismos por horas</Text>
          </Box>
        </Card>
      </Flex>
    </Card>
  );
};
