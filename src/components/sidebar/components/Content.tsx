// chakra imports
import { Box, Flex, Stack } from '@chakra-ui/react';
//   Custom components
import Brand from '@/components/sidebar/components/Brand';
import Links from '@/components/sidebar/components/Links';

// FUNCTIONS

function SidebarContent(props: {
  onClick?: any;
  routes: RoutesType[];
  hovered?: boolean;
  mini?: boolean;
}) {
  const { routes, mini, hovered, onClick } = props;
  // SIDEBAR
  return (
    <Flex
      direction="column"
      height="100%"
      p="25px"
      w={{ sm: '265px', lg: '285px' }}
      borderRadius="30px"
      m={{ sm: '20px 10px', lg: '20px' }}
    >
      <Brand mini={mini} hovered={hovered} />
      <Stack
        direction="column"
        mb=""
        mt="8px"
        ml={
          mini === false
            ? '-15px'
            : mini === true && hovered === true
            ? '-15px'
            : '30px'
        }
        alignItems="left"
        overflowY={'auto'}
        h={'65%'}
      >
        <Box
          // ps={
          //   mini === false
          //     ? '20px'
          //     : mini === true && hovered === true
          //     ? '20px'
          //     : '16px'
          // }
          pe={{ md: '16px', '2xl': '1px' }}
          ms={mini && hovered === false ? '-16px' : 'unset'}
        >
          <Links
            mini={mini}
            hovered={hovered}
            routes={routes}
            onClick={onClick}
          />
        </Box>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;
