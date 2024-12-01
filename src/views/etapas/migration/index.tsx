// Chakra imports
import {
	Box,
	Grid,
	useColorModeValue
} from '@chakra-ui/react';
// Custom components

import Conversion from './components/Conversion';
import UserActivity from './components/MigrationStast';
import UserReportsTable from './components/UserReportsTable';
import tableDataUserReports from './variables/tableDataUserReports';

// Assets
import Card from '@/components/card/Card';
import Banner from './components/Banner';

export default function MigrationData() {
	// Chakra Color Mode
	const textColorSecondary = 'secondaryGray.600';
	const brandColor = useColorModeValue('brand.500', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<Banner />			
			<Grid
				w='100%'
				display={{ base: 'flex', md: 'grid' }}
				flexDirection={{ base: 'column', md: 'unset' }}
				templateColumns={{ md: '1fr 2.6fr' }}
				templateRows={{ base: 'repeat(2, 1fr)', md: '1fr' }}>
				<Box me={{ base: '0px', md: '20px' }} mb={{ base: '20px', md: '0px' }} gridArea='1 / 1 / 2 / 2'>
					<Conversion mb='20px' />
				</Box>
				<Card gridArea={{ base: '2 / 1 / 3 / 2', md: '1 / 2 / 2 / 3' }} mb={{ base: '20px', md: '0px' }} height="min-content">
					<UserReportsTable tableData={tableDataUserReports} />
				</Card>
			</Grid>
		</Box>
	);
}
