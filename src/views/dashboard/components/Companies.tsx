import {
  AvatarGroup,
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from '@/components/card/Card';
// Assets
import { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function CompaniesGrid(props: {
  image: string;
  name: string;
  author: string;
  bidders: string[];
  isActive: boolean;  // Nueva propiedad para controlar el estado
}) {
  const { image, name, author, bidders, isActive } = props;
  const [like, setLike] = useState(false);
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorBid = useColorModeValue('brand.500', 'white');

  const navigate = useNavigate();

  const navigateCompany = () => {
    navigate('/pages/etapas/analisis');
  };

  return (
    <Card
      p="20px"
      _hover={{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg: isActive ? useColorModeValue("lightbranding.600", "gray.700") : "gray.200",
        transform: isActive ? "scale(1.02)" : "none",
        transition: "0.3s ease",
        cursor: isActive ? "pointer" : "not-allowed",
      }}
      onClick={() => {
        if (isActive) {
          navigateCompany();
        }
      }}
    >
      <Flex direction={{ base: 'column' }} justify="center">
        <Box mb={{ base: '20px', '2xl': '20px' }} position="relative">
          <Image
            src={image}
            w={{ base: '100%', '3xl': '100%' }}
            h={{ base: '250px', '3xl': '250px' }}
            objectFit='contain'
            borderRadius="20px"
            bg="white"
          />
          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: isActive ? 'whiteAlpha.900' : 'gray.300' }}
            _active={{ bg: 'white' }}
            _focus={{ bg: 'white' }}
            p="0px !important"
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => {
              if (isActive) {
                setLike(!like);
              }
            }}
            isDisabled={!isActive}
          >
            <Icon
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={like ? IoHeart : IoHeartOutline}
              color="brand.500"
            />
          </Button>
        </Box>
        <Flex flexDirection="column" justify="space-between" h="100%">
          <Flex
            justify="space-between"
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
            mb="auto"
          >
            <Flex direction="column">
              <Text
                color={textColor}
                fontSize={{
                  base: 'xl',
                  md: 'lg',
                  lg: 'lg',
                  xl: 'lg',
                  '2xl': 'md',
                  '3xl': 'lg',
                }}
                mb="5px"
                fontWeight="bold"
                me="14px"
              >
                {name}
              </Text>
              <Text
                color={textColor}
                fontSize={{
                  base: 'sm',
                }}
                fontWeight="400"
                me="14px"
              >
                {author}
              </Text>
            </Flex>
            <AvatarGroup
              max={3}
              color={textColorBid}
              size="sm"
              mt={{
                base: '0px',
                md: '10px',
                lg: '0px',
                xl: '10px',
                '2xl': '0px',
              }}
              fontSize="12px"
            >
              {bidders.map((avt, key) => (
                <Avatar key={key} src={avt} />
              ))}
            </AvatarGroup>
          </Flex>
          <Flex
            align={{
              base: 'center',
              md: 'start',
              lg: 'center',
              xl: 'start',
              '2xl': 'center',
            }}
            justify="space-between"
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
            mt="25px"
          >
            <Link
              href={isActive ? "#" : undefined}
              mt={{
                base: '0px',
                md: '10px',
                lg: '0px',
                xl: '10px',
                '2xl': '0px',
              }}
            >
              <Button
                variant="darkBrand"
                color="white"
                fontSize="sm"
                fontWeight="500"
                borderRadius="70px"
                px="24px"
                py="5px"
                isDisabled={!isActive}
              >
                Comenzar
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
