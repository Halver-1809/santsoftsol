// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue, Grid } from '@chakra-ui/react';
// Custom components
import Card from '@/components/card/Card';
import { VSeparator } from '@/components/separator/Separator';
import PieChartGroup from '@/components/charts/PieChartGrupo';
import { pieChartDataGroup, pieChartOptionsGroup } from '@/variables/charts';
import { useState } from 'react';

export default function GroupsOrganizational(props: { [x: string]: any }) {
  const { ...rest } = props;
  const [selectedGroupDetails, setSelectedGroupDetails] = useState<string[]>([]);

  const handleGroupSelection = (details: string[]) => {
    setSelectedGroupDetails(details);
  };

  console.log(selectedGroupDetails)
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  return (
    <Card p='20px' alignItems='center' flexDirection='column' w='100%' {...rest}>
      <Flex
        px={{ base: '0px', '2xl': '10px' }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text
          fontSize={{ base: '15px', md: '20px' }}
          mb='14px'
          maxW={{
            base: '100%',
          }}
          fontWeight='700'
          textAlign="left"
          lineHeight={{ base: '32px', md: '42px' }}>
          Grupos / Áreas de Personal
        </Text>
      </Flex>

      <Flex w='100%' flexDirection={{ base: 'column', lg: 'row' }}>
        <Box minH="260px" minW="70%" mt="auto">
          <PieChartGroup
            chartData={pieChartDataGroup}
            chartOptions={pieChartOptionsGroup}
            onGroupSelect={handleGroupSelection}
          />
        </Box>
        <Box minH="260px" minW="30%" mt="auto">
          {selectedGroupDetails.length > 0 && (
            <Box maxH={200} overflowY="auto">
              <Text  fontWeight='700'>Áreas de personal del grupo seleccionado:</Text>
              <ul style={{ listStyleType: 'circle' }}>
                {selectedGroupDetails.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Box>
          )}
        </Box>
      </Flex>
      <Box minH="240px" minW="100%" mt="auto">
        <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={4}>
          {pieChartOptionsGroup.labels.map((label, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              padding="1"
              borderRadius="md"
              border="1px solid #ddd"
            >
              <Box
                width="20%"
                height="20px"
                borderRadius="full"
                backgroundColor={pieChartOptionsGroup.colors[index]}
                marginRight="8px"
              />
              <Text width="80%" fontSize='sm'>{label}</Text>
            </Box>
          ))}
        </Grid>
      </Box>
      <VSeparator mx={{ base: '10px' }} />
      {/* <Card flexDirection='column' me='10px' mt='28px' maxW="100%">
        <Flex align='center' mb='3px' justifyContent="space-between">

          <Text fontSize='lg' color='secondaryGray.700' fontWeight='700'>
            Posiciones
          </Text>
          <VSeparator mx={{ base: '10px' }} />
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            3086
          </Text>
        </Flex>
        <Flex align='center' mb='3px' justifyContent="space-between">
          <Text fontSize='lg' color='secondaryGray.700' fontWeight='700'>
            Unidades Organizacionales
          </Text>
          <VSeparator mx={{ base: '10px' }} />
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            300
          </Text>
        </Flex>
      </Card> */}
    </Card>
  );
}
