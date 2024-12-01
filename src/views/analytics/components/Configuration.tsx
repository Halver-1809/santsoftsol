// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from '@/components/card/Card';
import { MdBarChart, MdOutlineCalendarToday, MdStackedBarChart } from 'react-icons/md';
// Assets
import { barChartDataZ, barChartOptionsZ } from '@/variables/charts';
import ColumnChartConfig from '@/components/charts/BarConfig';
import { RiBarChartHorizontalFill, RiBarChartHorizontalLine } from 'react-icons/ri';


export default function TotalConfigurationZ(props: { [x: string]: any }) {
  const { ...rest } = props;

  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const iconColor = useColorModeValue('brand.500', 'white');
  const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
  const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });

  return (
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
				Estructuras de configuración
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
          <Icon as={RiBarChartHorizontalFill} color={iconColor} w='24px' h='24px' />
        </Button>
      </Flex>
      <Flex w='100%' flexDirection={{ base: 'column', lg: 'row' }}>
        <Box minH="400px" minW="100%" mt="auto">
          <ColumnChartConfig
            chartData={barChartDataZ}
            chartOptions={barChartOptionsZ}
          />
        </Box>
      </Flex>
    </Card>
  );
}
