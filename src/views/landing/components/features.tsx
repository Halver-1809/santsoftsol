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
  const iconColor = useColorModeValue('#AEA4FB', 'white');

  return (
    <Box
      as="section"
      py={{ base: '8', md: '16' }}
      maxW={{ base: '100%', xl: '6xl' }}
      mx="auto"
      px={{ base: '4', md: '8' }}
      id="services"
    >
      <Box textAlign="center" maxW="3xl" mx="auto" pb={{ base: '8', md: '16' }}>
        <Heading as="h2" size="lg" mb="4">
          Why choose us?
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.500">
          At Santsoft, we understand that every company has unique needs. That's why we offer customized and tailored solutions
          to maximize the value of your Salesforce investment. With years of experience and a customer-centric approach, we
          help companies like K2 and Sonos optimize their business processes, improve operational efficiencies, and enhance
          their customer experience by implementing advanced Salesforce solutions. Lighten the load on your management system
          and allow your talent to focus on what really matters to create impact.
        </Text>
      </Box>
      <Heading as="h2" size="lg" textAlign="center" mb="8">
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
          width: '100%',
        }}
      >
        {[
          {
            icon: IoAnalyticsSharp,
            title: 'Salesforce Consulting',
            text:
              'Our team of Salesforce experts will guide you through the entire process, from strategic planning to platform implementation and customization. We ensure that Salesforce perfectly fits your business needs, improving productivity and efficiency.',
          },
          {
            icon: MdCreateNewFolder,
            title: 'Custom Development',
            text:
              'We understand that every business is different, which is why we offer custom development to optimize workflows and improve customer interactions. From creating custom applications to system integration, our solutions are designed to help you achieve your business goals.',
          },
          {
            icon: IoCopySharp,
            title: 'Salesforce Implementation and Optimization',
            text:
              'We ensure a smooth and successful Salesforce implementation, helping your team take full advantage of the platform\'s features. We specialize in Salesforce integration with other systems and optimizing your business processes for the best outcomes.',
          },
          {
            icon: MdDataExploration,
            title: 'Continuous Support and Maintenance',
            text:
              'At Santsoft, we not only help you implement Salesforce but also provide continuous support to ensure your system works optimally at all times. Our team is available to resolve any issues and ensure your platform continues evolving to meet your business needs.',
          },
          {
            icon: FaCheckCircle,
            title: 'Verification',
            text:
              'Test and validate basic scenarios to ensure data completeness and configuration integrity. Complement your business testing with our solutions.',
          },
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <Flex
              direction="column"
              align="center"
              textAlign="center"
              px={{ base: '4', md: '6' }}
              py={{ base: '6', md: '8' }}
              bg={bgColor}
              borderRadius="lg"
              boxShadow="md"
              transition="transform 0.3s ease, background-color 0.3s ease"
              _hover={{ transform: 'scale(1.05)', bg: useColorModeValue('gray.200', 'gray.700') }}
            >
              <Icon as={item.icon} w={{ base: 12, md: 16 }} h={{ base: 12, md: 16 }} mb="4" color={iconColor} />
              <Heading as="h4" size="md" mb="2">
                {item.title}
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'lg' }} color="gray.600" p={{ base: '4', md: '6' }}>
                {item.text}
              </Text>
              <Box mt="4">
                <a href={`#${item.title}`} style={{ textDecoration: 'none' }}>
                  <Text color="blue.500" fontWeight="bold">Learn more</Text>
                </a>
              </Box>
            </Flex>

          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
