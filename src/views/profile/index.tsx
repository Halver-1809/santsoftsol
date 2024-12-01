// Chakra imports
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
// Assets
import banner from '@/assets/img/auth/banner.png';
import profile from '@/assets/img/crm/vbz.png';

// Custom components
import Info from './components/Info';
import Password from './components/Password';
import Profile from './components/Profile';
import Socials from './components/Socials';

export default function ProfileUser() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, lg: 2 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        {/* Column Left */}
        <Flex direction="column">
          <Profile name="Vlad Mihalache" avatar={profile} banner={banner} />
          <Info />
        </Flex>
        {/* Column Right */}
        <Flex direction="column">
          <Socials />
          <Password />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
