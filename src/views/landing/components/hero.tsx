
import Card from "@/components/card/Card";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import 'animate.css';

const HeroSection = () => {
  return (
    <Box as="section" id="home">
      <Container maxW="6xl" px={{ base: 4, sm: 6 }} position="relative">
        <Box pt={{ base: 32, md: 40 }} pb={{ base: 10, md: 16 }} position="relative">
          <Image src="/Personas.png" alt="Personas" mx="auto" />
          <Card
            maxW="4xl"
            mx="auto"
            textAlign="center"
            py={6}
            px={6}
            border="1px"
            borderColor="gray.300"
            rounded="3xl"
            shadow="lg"
            mt={0}
          >
         <Text
          fontSize="xl"
          fontWeight="normal"
           mb={4}
          lineHeight="1.5"
          className="animate__animated  animate__zoomInDown"
        >
              At Santsoft, we are your <strong>strategic partner</strong> <br /> to <strong>maximize</strong> {" "}
            Salesforce and <strong>digitally transform</strong> your business. <br />
        </Text>
          </Card>
        </Box>
      </Container>
        
    </Box>
  );
};

export default HeroSection;

