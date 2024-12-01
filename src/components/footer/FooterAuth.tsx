 

import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  let textColor = useColorModeValue('gray.400', 'white');
  let linkColor = useColorModeValue('white', 'navy.900');
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: 'column',
        lg: 'row',
      }}
      alignItems={{
        base: 'center',
        xl: 'start',
      }}
      justifyContent="space-between"
      px={{ base: '30px', md: '0px' }}
      pb="30px"
      
    >
      <Text
        color={textColor}
        textAlign={{
          base: 'center',
          xl: 'start',
        }}
        mb={{ base: '20px', lg: '0px' }}
      >
        {' '}
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="500" ms="4px">
         SantSoft. Todos los derechos reservados
        </Text>
      </Text>
      <List display="flex" bg={linkColor} padding={4} borderRadius={50}> 
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <Link fontWeight="500" color={textColor} href="/">
            Soporte
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <Link fontWeight="500" color={textColor} href="/">
            Licencia
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <Link fontWeight="500" color={textColor} href="/">
            Terminos de uso
          </Link>
        </ListItem>
        <ListItem>
          <Link fontWeight="500" color={textColor} href="/">
            Noticias
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
