// Chakra imports
import {
  Box,
  Flex,
  Select,
  Text,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react';
import { useState } from 'react';

import {
  barChartDataUserActivity,
  barChartOptionsUserActivity,
} from '@/variables/charts';
import BarChart from '@/components/charts/BarChart';
import Card from '@/components/card/Card';

export default function UserActivity(props: { [x: string]: any }) {
  const { ...rest } = props;

  const theme = useTheme();
   
  const [chartColor, setChartColor] = useState(theme.colors.brand[500]);
  const newOptions = {
    ...barChartOptionsUserActivity,
    colors: [chartColor, '#6AD2FF'],
    fill: {
      ...barChartOptionsUserActivity.fill,
      colors: [chartColor, '#6AD2FF'],
    },
  };

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card alignItems="center" flexDirection="column" w="100%" {...rest}>
      <Flex align="center" w="100%" px="15px" py="10px">
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
        >
          Progreso de migración
        </Text>
        <Select
          id="user_type"
          w="unset"
          variant="transparent"
          display="flex"
          alignItems="center"
          defaultValue="Weekly"
        >
          <option value="Weekly">Semanal</option>
          <option value="Daily">Diariamente</option>
          <option value="Monthly">Mensuamente</option>
        </Select>
      </Flex>

      <Box h="240px" mt="auto">
        <BarChart
          chartData={barChartDataUserActivity}
          chartOptions={newOptions}
        />
      </Box>
    </Card>
  );
}
