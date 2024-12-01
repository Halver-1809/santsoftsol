import {
  Box,
  Grid,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Testimonials() {
  return (
    <Box as="section" py={{ base: 12, md: 20 }} id="testimonials">
      <Box maxW="6xl" mx="auto" px={{ base: 4, sm: 6 }}>
        {/* Section header */}
        <Box maxW="3xl" mx="auto" textAlign="center" pb={{ base: 12, md: 20 }}>
          <Heading as="h2" size="xl" mb={4}>
          Who’s already part of our success story?
          </Heading>
        </Box>

        {/* Centered Testimonials */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={{ base: 8, lg: 6 }}
          justifyContent="center"
          alignItems="center"
        >
          {/* 1st testimonial */}
          <Box
            as="figure"
            display="flex"
            justifyContent="center"
            alignItems="center"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            boxShadow={useColorModeValue(
              '0 4px 12px rgba(0, 0, 0, 0.1)',
              '0 4px 12px rgba(255, 255, 255, 0.2)'
            )}
            borderRadius="md"
            p={4}
            _hover={{
              transform: 'scale(1.1)',
              boxShadow: useColorModeValue(
                '0 6px 20px rgba(0, 0, 0, 0.15)',
                '0 6px 20px rgba(255, 255, 255, 0.25)'
              ),
            }}
          >
            <Image
              src="/sono-logo.png"
              alt="Sonos logo"
              boxSize="150px"
              objectFit="contain"
            />
          </Box>

          {/* 2nd testimonial */}
          <Box
            as="figure"
            display="flex"
            justifyContent="center"
            alignItems="center"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            boxShadow={useColorModeValue(
              '0 4px 12px rgba(0, 0, 0, 0.1)',
              '0 4px 12px rgba(255, 255, 255, 0.2)'
            )}
            borderRadius="md"
            p={4}
            _hover={{
              transform: 'scale(1.1)',
              boxShadow: useColorModeValue(
                '0 6px 20px rgba(0, 0, 0, 0.15)',
                '0 6px 20px rgba(255, 255, 255, 0.25)'
              ),
            }}
          >
            <Image
              src="/k2-logo.png"
              alt="K2 logo"
              boxSize="150px"
              objectFit="contain"
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
