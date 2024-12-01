import {
  Box,
  Flex,
  Grid,
  Text,
  Link,
  IconButton,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';
import patterHR from '@/assets/img/landing/pattern.svg';
import SvgLogoSantsof from '@/assets/img/landing/logSantsoft';

export default function Footer() {
  const bgPricipal = useColorModeValue('#F9D47D', '#aea4fb');


  return (
    <Box
      as="footer"
      position="relative"
      py={{ base: 12, md: 16 }}
      backgroundColor={bgPricipal}
    >
      <Box
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${patterHR})`,
          backgroundSize: '100%',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          opacity: 0.2,
          zIndex: 0,
        }}
      />
      <Box
        position="relative"
        zIndex={1}
        maxW="6xl"
        mx="auto"
        px={{ base: 4, sm: 6 }}
      >
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }}
          gap={{ base: 8, lg: 20 }}
          mb={{ base: 8, md: 12 }}
        >
          <Box gridColumn={{ md: 'span 4', lg: 'span 5' }}>
            <Box mb={2}>
              <SvgLogoSantsof/>
           </Box>
            <Text color="darkbrading.500">
              Copyright © 2024 SantSoft All rights reserved.
              Privacy policy
            </Text>
          </Box>
          <Grid
            gridColumn={{ md: 'span 8', lg: 'span 7' }}
            templateColumns={{ base: '1fr', sm: 'repeat(3, 1fr)' }}
            gap={8}
          >
            <Box>
              <Text
                fontSize="xl"
                fontWeight="medium"
                color="darkbrading.500"
                mb={1}
              >
                SantSoft
              </Text>
              <Stack spacing={1}>
                <Link
                  href=""
                  color="darkbrading.500"
                  _hover={{ color: 'gray.100' }}
                >
                  Our solutions
                </Link>
                <Link
                  href=""
                  target="_blank"
                  color="darkbrading.500"
                  _hover={{ color: 'gray.100' }}
                >
                  About Us
                </Link>
              </Stack>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="medium"
                color="darkbrading.500"
                mb={1}
              >
                SantSoft
              </Text>
              <Stack spacing={1}>
                <Link
                  href="/"
                  color="darkbrading.500"
                  _hover={{ color: 'gray.100' }}
                >
                  Projects
                </Link>
                <Link
                  href="/"
                  color="darkbrading.500"
                  _hover={{ color: 'gray.100' }}
                >
                  Modules
                </Link>
              </Stack>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="medium"
                color="darkbrading.500"
                mb={1}
              >
                Contact
              </Text>
              <Stack spacing={1}>
                <Link
                  href=""
                  target="_blank"
                  color="darkbrading.500"
                  _hover={{ color: 'gray.100' }}
                >
                  Contact Us
                </Link>
                <Link
                  href="mailto:smart@santsoft-co.com"
                  target="_blank"
                  color="darkbrading.500"
                  _hover={{ color: 'gray.100' }}
                >
                  Santsoft@solar-co.com
                </Link>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex mb={{ base: 4, md: 0 }}>
            <IconButton
              as="a"
              href=""
              target="_blank"
              aria-label="Facebook"
              icon={<FaFacebook />}
              bg="gray.800"
              color="lightbranding.600"
              rounded="full"
              _hover={{ bg: 'lightbranding.500', color: 'darkbrading.50' }}
              mr={4}
            />
            <IconButton
              as="a"
              href=""
              target="_blank"
              aria-label="Instagram"
              icon={<FaInstagram />}
              bg="gray.800"
              color="lightbranding.600"
              rounded="full"
              _hover={{ bg: 'lightbranding.500', color: 'darkbrading.50' }}
              mr={4}
            />
            <IconButton
              as="a"
              href=""
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              bg="gray.800"
              color="lightbranding.600"
              rounded="full"
              _hover={{ bg: 'lightbranding.500', color: 'darkbrading.50' }}
              mr={4}
            />
            <IconButton
              as="a"
              href=""
              target="_blank"
              aria-label="Youtube"
              icon={<FaYoutube />}
              bg="gray.800"
              color="lightbranding.600"
              rounded="full"
              _hover={{ bg: 'lightbranding.500', color: 'darkbrading.50' }}
              mr={4}
            />
            <IconButton
              as="a"
              href=""
              target="_blank"
              aria-label="TikTOk"
              icon={<FaTiktok />}
              bg="gray.800"
              color="lightbranding.600"
              rounded="full"
              _hover={{ bg: 'lightbranding.500', color: 'darkbrading.50' }}
              mr={4}
            />
          </Flex>
          <Text fontSize="sm" color="gray.400">
            &copy; SantSoft. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
