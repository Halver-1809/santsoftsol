import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Image,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import contactImage from '../../../assets/img/landing/FormContact.jpg';

const ContactForm: React.FC = () => {
  const bgPricipal = useColorModeValue('#F9D47D', '#aea4fb');
  const [scrollY, setScrollY] = useState(0);
  const bgColor = useColorModeValue('white', '0');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rotationAngle = (scrollY / 10) % 360;

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      bg={bgColor}
      px={4}
      flexDirection={{ base: 'column', md: 'row' }}
      mt={{ base: 40, md: 0 }}
      mb={{ base: 120, md: 0 }}
      id='contactform'
    >
      <Flex
        w="90vw"
        maxW="1200px"
        rounded="md"
        p={8}
        bg={bgColor}
        flexDirection={{ base: 'column', md: 'row' }}
        mt={{ base: 8, md: 0 }}
        mb={{ base: 12, md: 0 }}
      >
        <Box
          w={{ base: '100%', md: '40%' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={{ base: 6, md: 0 }}
        >
          <Box
            style={{
              backgroundColor: bgPricipal,
              borderRadius: '50%',
              padding: '16px',
              position: 'relative',
              width: 'auto',
              height: 'auto',
            }}
          >
            <Image
              src={contactImage}
              alt="Contact Image"
              boxSize="400px"
              borderRadius="full"
            />
          </Box>
        </Box>

        <VStack
          w={{ base: '100%', md: '60%' }}
          spacing={6}
          align="flex-start"
          pl={{ base: 0, md: 6 }}
        >
          <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">
            Want us to contact you?
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            Fill out the form and we'll get back to you!
          </Text>

          <FormControl id="name" isRequired>
            <FormLabel>Your Name</FormLabel>
            <Input placeholder="Your name" size="lg" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Email" size="lg" />
          </FormControl>

          <FormControl id="subject">
            <FormLabel>Subject</FormLabel>
            <Input placeholder="Subject" size="lg" />
          </FormControl>

          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Message" size="lg" />
          </FormControl>

          <Button
            bg="#2501BA"
            color="white"
            size="lg"
            w="full"
            mt={4}
            _hover={{ bg: '#B3F200', color: '#171717' }}
          >
            Send
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
