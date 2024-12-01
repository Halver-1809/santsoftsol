
// Chakra imports
import { Text, Box, Flex, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaChartBar, FaCogs, FaDatabase, FaFileAlt, FaSitemap, FaUserCog } from 'react-icons/fa';
import { MdBusiness, MdCloud, MdFlag, MdLock, MdPerson, MdPersonRemove, MdUpdate } from 'react-icons/md';
// Assets
import MiniStatistics from '@/components/card/MiniStatistics';
import IconBox from '@/components/icons/IconBox';
import TotalResumeNomina from './components/Nomina';
import TotalConfigurationZ from './components/Configuration';
import AnalyticsCards from './components/cardsInfo';
import Card from '@/components/card/Card';
import GroupsOrganizational from './components/Groups';
import DivisionOrg from './components/Division';
import { CardsHour } from './components/cards-h-a';
import { InformationStore } from './components/information-store';

export default function Analytics() {
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconColor = useColorModeValue('brand.500', 'white');

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Flex align="center" mb="15px">
        <Icon as={FaDatabase} color={iconColor} w={8} h={8} mr={3} />
        <Text color={textColor} fontSize={{ base: '30px', md: '30px' }}
          maxW={{
            base: '75%',
            md: '54%',
            lg: '65%',
            xl: '65%',
            '2xl': '50%',
            '3xl': '42%'
          }}
          fontWeight='700'
          lineHeight={{ base: '32px', md: '42px' }}>
          Datos generales del sistema
        </Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 4 }} gap='20px' mb='20px' bg="white" borderRadius={20}>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdBusiness} color={iconColor} />}
            />
          }
          name='Molga'
          value='38'
        />

        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdFlag} color={iconColor} />}
            />
          }
          name='País'
          value='Colombia'
        />

        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdCloud} color={iconColor} />}
            />
          }
          name='Versión SAP'
          value='SAP ECC 6.0'
        />

        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdUpdate} color={iconColor} />}
            />
          }
          name='Última Actualización'
          value='SP Level 208'
        />

        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdPerson} color={iconColor} />}
            />
          }
          name='Empleados Activos'
          value='2,845'
        />

        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdPersonRemove} color={iconColor} />}
            />
          }
          name='Empleados Retirados'
          value='1,687'
        />

        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdLock} color={iconColor} />}
            />
          }
          name='Roles de Permisos'
          value='3'
        />

        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={FaCogs} color={iconColor} />}
            />
          }
          name='Módulos'
          value='OM-PA-PT-PY'
        />

      </SimpleGrid>
      <Flex align="center" mb="15px">
        <Icon as={FaBuilding} color={iconColor} w={8} h={8} mr={3} />
        <Text color={textColor} fontSize={{ base: '30px', md: '30px' }}
          maxW={{
            base: '75%',
            md: '54%',
            lg: '65%',
            xl: '65%',
            '2xl': '50%',
            '3xl': '42%'
          }}
          fontWeight='700'
          lineHeight={{ base: '32px', md: '42px' }}>
          Estructuras HCM
        </Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <GroupsOrganizational />
        <DivisionOrg />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2, '2xl': 2 }} gap='20px' mb='20px' bg="white" borderRadius={20}>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={FaSitemap} color={iconColor} />}
            />
          }
          name='Unidades Organizacionales'
          value='300'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdBusiness} color={iconColor} />}
            />
          }
          name='Posiciones'
          value='3086'
        />

      </SimpleGrid>
      <Flex align="center" mb="15px">
        <Icon as={FaFileAlt} color={iconColor} w={8} h={8} mr={3} />
        <Text color={textColor} fontSize={{ base: '30px', md: '30px' }}
          maxW={{
            base: '75%',
            md: '54%',
            lg: '65%',
            xl: '65%',
            '2xl': '50%',
            '3xl': '42%'
          }}
          fontWeight='700'
          lineHeight={{ base: '32px', md: '42px' }}>
          Información configuraciones de nómina
        </Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalResumeNomina />
        <Box>
          <Text
            fontSize={{ base: '15px', md: '20px' }}
            mb='14px'
            maxW={{
              base: '100%',
            }}
            fontWeight='700'
            textAlign="left"
            lineHeight={{ base: '32px', md: '42px' }}>
            Conceptos de nómina
          </Text>
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
                  Propios:
                </Text>
              </Flex>
              <Text fontSize="md">
                197
              </Text>
            </Box>
          </Card>
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
                  Estandar:
                </Text>
              </Flex>
              <Text fontSize="md">
                1.204
              </Text>
            </Box>
          </Card>


        </Box>


      </SimpleGrid>
      <Flex align="center" mb="15px">
        <Icon as={FaBriefcase} color={iconColor} w={8} h={8} mr={3} />
        <Text color={textColor} fontSize={{ base: '30px', md: '30px' }}
          maxW={{
            base: '75%',
            md: '54%',
            lg: '65%',
            xl: '65%',
            '2xl': '50%',
            '3xl': '42%'
          }}
          fontWeight='700'
          lineHeight={{ base: '32px', md: '42px' }}>
          Información personalizaciones de nómina
        </Text>
      </Flex>
      <Flex gap="20px" mb="20px">
        <Box width={{ base: "100%", md: "70%" }}>
          <TotalConfigurationZ />
        </Box>
        <Box width={{ base: "100%", md: "30%" }}>
          <AnalyticsCards />
        </Box>
      </Flex>
      <Flex align="center" mb="15px">
        <Icon as={FaCalendarAlt} color={iconColor} w={8} h={8} mr={3} />
        <Text color={textColor} fontSize={{ base: '30px', md: '30px' }}
          maxW={{
            base: '75%',
            md: '54%',
            lg: '65%',
            xl: '65%',
            '2xl': '50%',
            '3xl': '42%'
          }}
          fontWeight='700'
          lineHeight={{ base: '32px', md: '42px' }}>
          Información gestión de tiempos
        </Text>
      </Flex>
      <CardsHour />
      <Flex align="center" mb="15px">
        <Icon as={FaUserCog} color={iconColor} w={8} h={8} mr={3} />
        <Text color={textColor} fontSize={{ base: '30px', md: '30px' }}
          maxW={{
            base: '75%',
            md: '54%',
            lg: '65%',
            xl: '65%',
            '2xl': '50%',
            '3xl': '42%'
          }}
          fontWeight='700'
          lineHeight={{ base: '32px', md: '42px' }}>
          Información estructuras de almacenamiento
        </Text>
      </Flex>
      <InformationStore />
    </Box>
  );
}
