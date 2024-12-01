// Chakra imports
import Card from '@/components/card/Card';
import { Box, Flex, Text, Icon, useColorModeValue, CardBody, Stack } from '@chakra-ui/react';
import { FaChartBar, FaGlobeAmericas, FaCogs } from 'react-icons/fa'; // Icons for the cards

export default function AnalyticsCards() {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const cardBg = useColorModeValue('white', 'whiteAlpha.100');
  const cardHoverBg = useColorModeValue('gray.100', 'whiteAlpha.200');
  const iconColor = useColorModeValue('brand.500', 'white');

  return (
    <Card p="30px">
      <Text
				fontSize={{ base: '15px', md: '20px' }}
				mb='14px'
				maxW={{
					base: '100%',
				}}
				fontWeight='700'
        textAlign="left"
				lineHeight={{ base: '32px', md: '42px' }}>
				 Información objetos de desarrollo
			</Text>

      <Flex direction={{ base: 'column'}} justify="space-between">
        {/* Card 1: Clases de Desarrollo Z */}
        <Card
          maxW="sm"
          borderRadius="10px"
          boxShadow="lg"
          mb={2}
        >
          <Box>
            <Flex align="center" mb="15px">
              <Icon as={FaChartBar} color={iconColor} w={8} h={8} mr={3} />
              <Text color={textColor} fontSize="xl" fontWeight="600">
                Clases de Desarrollo Z
              </Text>
            </Flex>
            <Text fontSize="md">
              10 clases de desarrollo
            </Text>
          </Box>
        </Card>

        {/* Card 2: Reportes Z */}
        <Card
          maxW="sm"
          borderRadius="10px"
          boxShadow="lg"
          mb={2}
        >
          <Box>
            <Flex align="center" mb="15px">
              <Icon as={FaGlobeAmericas} color={iconColor} w={8} h={8} mr={3} />
              <Text color={textColor} fontSize="xl" fontWeight="600">
                Reportes Z
              </Text>
            </Flex>
            <Text  fontSize="md">
              66 reportes no se identifican a qué país pertenece.
            </Text>
          </Box>
        </Card>

        {/* Card 3: Infotipos Z */}
        <Card
          maxW="sm"
          borderRadius="10px"
          boxShadow="lg"
        >
          <Box>
            <Flex align="center" mb="15px">
              <Icon as={FaCogs} color={iconColor} w={8} h={8} mr={3} />
              <Text color={textColor} fontSize="xl" fontWeight="600">
                Infotipos Z
              </Text>
            </Flex>
            <Text fontSize="md">
              8 Infotipos propios.
            </Text>
          </Box>
        </Card>
      </Flex>
    </Card>
  );
}
