// Chakra imports
import { Box, Button, Flex, Icon, Select, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from '@/components/card/Card';
import LineChart from '@/components/charts/LineChart';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { MdBarChart, MdOutlineCalendarToday } from 'react-icons/md';
// Assets
import { RiArrowUpSFill } from 'react-icons/ri';
import { barChartData, barChartOptions, lineChartDataTotalSpent, lineChartOptionsTotalSpent } from '@/variables/charts';
import { useState } from 'react';
import ColumnChart from '@/components/charts/BarChart';
import ColumnChartNomina from '@/components/charts/BarNomina';
import { VSeparator } from '@/components/separator/Separator';

type ChartProps = {
  chartData: any[];
  chartOptions: any;
};

// Definir el tipo para las opciones de nómina
interface NominaOption {
  value: string;
  label: string;
}

// Definir el tipo para el objeto 'nominas' con claves de tipo 'Mensual', 'Quincenal', etc.
interface Nominas {
  [key: string]: NominaOption[];
}

export default function TotalResumeNomina(props: { [x: string]: any }) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const iconColor = useColorModeValue('brand.500', 'white');
  const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
  const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });
  const cardColor = useColorModeValue('white', 'navy.700');
  const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');

  const [categoria, setCategoria] = useState<string>('');

  const categorias = ['Mensual', 'Quincenal', 'Semanal', 'NO Liquida'];

  const nominas: Nominas = {
    Mensual: [
      { value: 'BE', label: 'Colombates Empleados' },
      { value: 'BJ', label: 'Jubilado/Pensionado' },
      { value: 'CE', label: 'Cartón Mensual' },
      { value: 'CJ', label: 'Cartón Jubilados' },
      { value: 'ZF', label: 'Fundación' },
    ],
    Quincenal: [
      { value: 'BP', label: 'Colombates Planta' },
      { value: 'CP', label: 'Cartón Quincenal' },
      { value: 'CR', label: 'Colresicladora' },
      { value: 'ZC', label: 'Corrumed' },
      { value: 'ZK', label: 'Packing' },
      { value: 'ZQ', label: 'Papelsa' },
    ],
    Semanal: [
      { value: 'ZS', label: 'Papelsa' },
    ],
    'NO Liquida': [
      { value: 'nominaBC', label: 'Colombates Contratistas' },
      { value: 'BT', label: 'Colombates Temporal' },
      { value: 'CC', label: 'Cartón Contratista' },
      { value: 'CT', label: 'Cartón Temporal' },
    ]
  };

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoria(e.target.value);
  };

  return (
    <>
      <Card justifyContent='center' flexDirection='column' w='100%' mb='0px' {...rest}>
        <Text
          fontSize={{ base: '15px', md: '20px' }}
          mb='14px'
          maxW={{
            base: '100%',
          }}
          fontWeight='700'
          textAlign="left"
          lineHeight={{ base: '32px', md: '42px' }}>
          Áreas de nómina
        </Text>
        <Flex align='center' justify='space-between' w='100%' pe='20px' pt='5px'>
          <Button bg={boxBg} fontSize='sm' fontWeight='500' color={textColorSecondary} borderRadius='7px'>
            <Icon as={MdOutlineCalendarToday} color={textColorSecondary} me='4px' />
            Última actualización
          </Button>
          <Button
            ms='auto'
            alignItems='center'
            justifyContent='center'
            bg={bgButton}
            _hover={bgHover}
            _focus={bgFocus}
            _active={bgFocus}
            w='37px'
            h='37px'
            lineHeight='100%'
            borderRadius='10px'
            {...rest}>
            <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
          </Button>
        </Flex>
        <Select
          placeholder="Selecciona un área de nomina"
          size="lg"
          mt={2}
          borderRadius="8px"
          onChange={handleCategoriaChange}
          value={categoria}
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
        <Flex w='100%' flexDirection={{ base: 'column', lg: 'row' }}>
          <Flex flexDirection='column' me='10px' mt='28px' maxW="30%">
            {categoria && nominas[categoria] && (
              <Box mt="20px">
                <Text fontSize="lg" fontWeight="600">
                  Áreas de nomina:
                </Text>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  {nominas[categoria].map((nomina) => (
                    <li key={nomina.value}>
                      <Text as="span">{nomina.label}</Text>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </Flex>
          <Box minH="260px" minW="70%" mt="auto">
            <ColumnChartNomina
              chartData={barChartData}
              chartOptions={barChartOptions}
            />
          </Box>
        </Flex>
        <Text fontSize='xs' color='secondaryGray.600' textAlign="center" fontWeight='700' mb='5px'>
          Conceptos de Nómina
        </Text>

      </Card> 
     
    </>
  );
}
