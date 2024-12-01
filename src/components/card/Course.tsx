// Chakra imports
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
// Custom components
import Card from '@/components/card/Card';
import useAuth from '@/hooks/useAuth';
import moment from 'moment-timezone';
import { useState } from 'react';
import { FaCogs } from 'react-icons/fa';
// Assets
import { MdOutlineTimer } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ModalModules } from '@/views/projects/listProjects/components/ModalModules';

export default function Course(props: {
  icon?: JSX.Element;
  title: string;
  desc: string;
  date: string;
  day: string;
  time: string;
  topics?: string[];
  bgBox: string;
  hover?: string;
  end_date?: string;
  start_date?: string;
  codProject?: number;
  name_company?: string;
}) {
  const {
    codProject,
    title,
    desc,
    day,
    time,
    bgBox,
    hover,
    end_date,
    start_date,
    name_company,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { role } = useAuth();

  const textColor = useColorModeValue('navy.700', 'white');
  /* const textBrand = useColorModeValue('navy.700', 'white');
  const bgBadge = useColorModeValue('secondaryGray.300', 'whiteAlpha.50'); */

  const [codeProject, setCodeProject] = useState<number>(0);
  const [titleProject, setTitleProject] = useState<string>('');
  /* const [companyProject, setCompanyProject] = useState<string>(''); */
  const [desProject, setDescProject] = useState<string>('');

  const handleAssignModule = async (
    cod: number,
    title: string,
    desc: string,
    name_company: string,
  ) => {
    setCodeProject(cod);
    setTitleProject(title);
    /* if (name_company === undefined) {
      setCompanyProject(user.name_company);
    } else {
      setCompanyProject(name_company);
    } */
    setDescProject(desc);
    onOpen();
  };

  const navigate = useNavigate();

  const handleClick = (titleProject: string, descProject: string) => {
    const params = {
      title: titleProject,
      desc: descProject,
      cod_project: codProject,
      nameCompany: name_company,
    };

    navigate('/pages/modules', { state: params });
  };

  return (
    <>
      <Card
        p="20px"
        h="max-content"
        minH={{ md: '450px', xl: 'auto' }}
        _hover={{ bgGradient: hover, bgSize: 'cover', bgPos: 'center' }}
        transition="background 1s ease-in-out"
        cursor="pointer"
        w={{ xl: '100%' }}
        position="relative" // Esto está bien
        onClick={() => handleClick(title, desc)}
      >
        <Flex direction={{ base: 'column', md: 'column', xl: 'row' }}>
          <Box
            bgImage={`url(${bgBox})`}
            bgSize="cover"
            bgRepeat="no-repeat"
            minW={{ base: '100%', xl: '400px', lg: '200px' }}
            minH={{ base: '200px', xl: '270px' }}
            borderRadius="20px"
            me="34px"
          />
          <Flex
            justify="space-between"
            flexDirection="column"
            mb="auto"
            py="30px"
            pb={{ base: '0px', md: '0px' }}
          >
            <Flex display={{ base: 'block', xl: 'flex' }} w={{ xl: '100%' }}>
              <Box flexDirection="column" w={{ xl: '100%' }} mb="25px">
                <Text
                  fontSize={{
                    base: 'md',
                  }}
                  fontWeight="400"
                  me="14px"
                >
                  {name_company}
                </Text>
                <Text
                  color={textColor}
                  fontSize={{
                    base: 'xl',
                    md: 'xl',
                    xl: 'xl',
                    '2xl': '28px',
                  }}
                  mb="10px"
                  fontWeight="700"
                >
                  {title}
                </Text>
                <Text
                  fontSize={{
                    base: 'md',
                  }}
                  fontWeight="400"
                  me="14px"
                >
                  {desc}
                </Text>
              </Box>
              <Text
                ms="auto"
                mt="10px"
                fontSize={{
                  base: 'md',
                }}
                fontWeight="500"
              >
                {day} •{' '}
                <Text
                  as="span"
                  color={textColor}
                  fontSize={{
                    base: 'md',
                  }}
                  fontWeight="500"
                  ms="4px"
                >
                  {moment.tz(start_date, 'America/Bogota').format('D/M/YYYY')}
                </Text>
              </Text>
            </Flex>
            <Flex w="100%" flexWrap="wrap">
              {/* {topics.map((topic, key) => (
                <Badge
                  key={key}
                  bg={bgBadge}
                  textAlign="center"
                  mb={{ base: '20px', md: '0px' }}
                  color={textBrand}
                  me="10px"
                  h="max-content"
                >
                  {topic}
                </Badge>
              ))} */}
              <Flex
                align="center"
                ms={{ base: '0px', xl: 'auto' }}
                pe={{ base: '10px', md: '0px' }}
              >
                <Icon as={MdOutlineTimer} color={textColor} me="6px" />
                <Text
                  color={textColor}
                  fontSize={{
                    base: 'sm',
                  }}
                  fontWeight="500"
                  me="14px"
                >
                  {time}
                </Text>
              </Flex>
            </Flex>
            <Flex display={{ base: 'block', xl: 'flex' }} mt={15}>
              <Box flexDirection="column" w="100%">
                <Text
                  fontSize={{
                    base: 'md',
                  }}
                  fontWeight="bold"
                  me="14px"
                >
                  Inicio:{' '}
                  {moment.tz(start_date, 'America/Bogota').format('D/M/YYYY')}
                </Text>
                <Text
                  fontSize={{
                    base: 'md',
                  }}
                  fontWeight="bold"
                  me="14px"
                >
                  Cierre:{' '}
                  {moment.tz(end_date, 'America/Bogota').format('D/M/YYYY')}
                </Text>
              </Box>
            </Flex>
          </Flex>
          {role !== 'customer' && role !== 'consultor' && (
            <Box
              position="absolute"
              bottom="10px"
              right="10px"
              bg="lightbranding.400"
              p="10px"
              color="#fff"
              borderRadius="full"
              zIndex="999"
              onClick={(e) => {
                e.stopPropagation();
                handleAssignModule(codProject, title, desc, name_company);
              }}
            >
              Editar proyecto:{' '}
              <Icon as={FaCogs} color="white" w="25px" h="25px" />
            </Box>
          )}
        </Flex>
      </Card>
      <ModalModules
        isOpen={isOpen}
        onClose={onClose}
        codProject={codeProject}
        titleProject={titleProject}
        descProject={desProject}
        nameCompany={name_company}
        imageProject={bgBox}
      />
    </>
  );
}
