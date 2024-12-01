import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaCheckCircle } from 'react-icons/fa';
import { Box, Flex, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { MdCreateNewFolder, MdDataExploration } from 'react-icons/md';
import { IoAnalyticsSharp, IoCopySharp } from 'react-icons/io5';

export default function Features() {
  const bgColor = useColorModeValue('#f2f2f2', '#aea4fb');
  const iconColor = useColorModeValue('#F9D47D', 'white');

  return (
    <Box
      as="section"
      py={{ base: '12', md: '20' }}
      maxW="6xl"
      mx="auto"
      px={{ base: '4', sm: '6' }}
      id="migration"
    >
      <Box
        textAlign="justify"
        maxW="3xl"
        mx="auto"
        pb={{ base: '12', md: '20' }}
      >
        <Heading as="h2" size="xl" mb="4">
          Why choose us?
        </Heading>
        <Text fontSize="xl" color="gray.400">
          At Santsoft, we understand that every company has unique needs. That's why we offer customized and tailored solutions 
          to maximize the value of your Salesforce investment. With years of experience and a customer-centric approach, 
          we help companies like K2 and Sonos optimize their business processes, improve operational efficiencies, and enhance 
          their customer experience by implementing advanced Salesforce solutions. Lighten the load on your management system 
          and allow your talent to focus on what really matters to create impact.
        </Text>
      </Box>
      <Heading as="h2" size="xl" mb="4">
        What we offer:
      </Heading>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        style={{
          width: '80%',
          padding: '20px 0',
        }}
      >
        <SwiperSlide>
          <Flex
            direction="column"
            align="center"
            textAlign="center"
            px={6}
            py={8}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="md"
            transition="transform 0.3s ease, background-color 0.3s ease"
            _hover={{ transform: 'scale(1.05)', bg: 'gray.100' }}
          >
            <Icon as={IoAnalyticsSharp} w={16} h={16} mb="4" color={iconColor} />
            <Heading as="h4" size="md" mb="2">
              Salesforce Consulting
            </Heading>
            <Text fontSize="lg" color="gray.600" p={10}>
              Our team of Salesforce experts will guide you through the entire process, from strategic planning to platform implementation 
              and customization. We ensure that Salesforce perfectly fits your business needs, improving productivity and efficiency.
            </Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            direction="column"
            align="center"
            textAlign="center"
            px={6}
            py={8}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="md"
            transition="transform 0.3s ease, background-color 0.3s ease"
            _hover={{ transform: 'scale(1.05)', bg: 'gray.100' }}
          >
            <Icon as={MdCreateNewFolder} w={16} h={16} mb="4" color={iconColor} />
            <Heading as="h4" size="md" mb="2">
              Custom Development
            </Heading>
            <Text fontSize="lg" color="gray.600" p={10}>
              We understand that every business is different, which is why we offer custom development to optimize workflows and improve 
              customer interactions. From creating custom applications to system integration, our solutions are designed to help you 
              achieve your business goals.
            </Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            direction="column"
            align="center"
            textAlign="center"
            px={6}
            py={8}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="md"
            transition="transform 0.3s ease, background-color 0.3s ease"
            _hover={{ transform: 'scale(1.05)', bg: 'gray.100' }}
          >
            <Icon as={IoCopySharp} w={16} h={16} mb="4" color={iconColor} />
            <Heading as="h4" size="md" mb="2">
              Salesforce Implementation and Optimization
            </Heading>
            <Text fontSize="lg" color="gray.600" p={10}>
              We ensure a smooth and successful Salesforce implementation, helping your team take full advantage of the platform's features. 
              We specialize in Salesforce integration with other systems and optimizing your business processes for the best outcomes.
            </Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            direction="column"
            align="center"
            textAlign="center"
            px={6}
            py={8}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="md"
            transition="transform 0.3s ease, background-color 0.3s ease"
            _hover={{ transform: 'scale(1.05)', bg: 'gray.100' }}
          >
            <Icon as={MdDataExploration} w={16} h={16} mb="4" color={iconColor} />
            <Heading as="h4" size="md" mb="2">
              Continuous Support and Maintenance
            </Heading>
            <Text fontSize="lg" color="gray.600" p={10}>
              At Santsoft, we not only help you implement Salesforce but also provide continuous support to ensure your system works 
              optimally at all times. Our team is available to resolve any issues and ensure your platform continues evolving to meet 
              your business needs.
            </Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            direction="column"
            align="center"
            textAlign="center"
            px={6}
            py={8}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="md"
            transition="transform 0.3s ease, background-color 0.3s ease"
            _hover={{ transform: 'scale(1.05)', bg: 'gray.100' }}
          >
            <Icon as={FaCheckCircle} w={16} h={16} mb="4" color={iconColor} />
            <Heading as="h4" size="md" mb="2">
              Verification
            </Heading>
            <Text fontSize="lg" color="gray.600" p={10}>
              Test and validate basic scenarios to ensure data completeness and configuration integrity. Complement your business testing with our solutions.
            </Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
