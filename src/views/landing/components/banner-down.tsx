import { Box, Image, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface PropsBannerDown {}

export const BannerDown: React.FC<PropsBannerDown> = () => {
  const bgPricipal = useColorModeValue("#2501BA", "#aea4fb");

  return (
    <Box
      bg={bgPricipal}
      w={{ base: "90%", md: "65%" }}
      mx="auto"
      borderRadius="50px"
      mb={10}
      p={4}
      color="white"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
      >
        <Box
          textAlign={{ base: "center", md: "left" }} // Centralizar en móvil, alineación izquierda en PC
          w={{ base: "100%", md: "75%" }}
          mb={{ base: 6, md: 0 }}
        >
          <Text
            fontSize={{ base: "3xl", md: "6xl" }}
            fontWeight="bold"
            color="white"
            mb={-3}
            ml={{ base: 0, md: 35 }}
            marginBottom={10}
          >
            <span style={{ color: "white" }}>¿</span>
            <span
              style={{
                backgroundColor: "#CEFB04",
                padding: "0 8px",
                borderRadius: "30px",
                color: "#2501BA",
              }}
            >
              Want
            </span>{" "}
            <span style={{ color: "white" }}>more</span>{" "}
            <br />
            <span
              style={{
                backgroundColor: "#CEFB04",
                padding: "0 8px",
                borderRadius: "30px",
                color: "#2501BA",
              }}
            >
              information
            </span>
            <span style={{ color: "white" }}>?</span>
          </Text>

          {/* WhatsApp Button */}
          <Flex
            align="center"
            bg="white"
            borderRadius="full"
            mt={6}
            py={4}
            px={6}
            w="fit-content"
            mx={{ base: "auto", md: "inherit" }} // Centrar botón en móvil
            ml={{ base: 0, md: 35 }}
          >
            <Image
              src="/Whatsapp.png"
              alt="WhatsApp"
              boxSize="60px"
              mr={10}
              style={{ transform: "scale(2.5)" }}
            />
            <Text fontSize={{ base: "md", md: "lg" }} color="#2501BA" fontWeight="bold">
              Chat <span style={{ color: "#6B51FB" }}>with one of our</span> advisors
            </Text>
          </Flex>
        </Box>

        {/* "Negrito" Image on the Right */}
        <Image
          src="/negrito.png"
          alt="Negrito"
          boxSize={{ base: "60%", md: "40%" }}
        />
      </Flex>
    </Box>
  );
};
