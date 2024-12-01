// Chakra imports
import { Flex } from '@chakra-ui/react';
import { LogoMigration, LogoMigrationReduce } from '@/components/icons/Icons';

// Custom components
import { useNavigate } from 'react-router-dom';

export function SidebarBrand(props: { mini: boolean; hovered: boolean }) {
  //   Chakra color mode
  const { mini } = props;
  const navigate = useNavigate();
  return (
    <Flex alignItems="center" flexDirection="column" p={'0px'} mb={'20px'}>
      <LogoMigration width="100%" display={
          mini === true
            ? 'none'
            : mini === false
            ? 'block'
            : 'none'
        } height="100%" onClick={()=> navigate('/home')} style={{cursor: 'pointer'}}/>
      <LogoMigrationReduce display={
          mini === false
            ? 'none'
            : mini === true 
            ? 'block'
            : 'none'
        } width={70} height="100%" onClick={()=> navigate('/home')} style={{cursor: 'pointer'}}/>
        
    </Flex>
  );
}

export default SidebarBrand;
