import { Box, Image, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface PropsBannerDown {}

export const BannerDown: React.FC<PropsBannerDown> = () => {
  const bgPricipal = useColorModeValue('#F9D47D', '#aea4fb');

  return (
    <Box
      bg={bgPricipal}
      w={{ base: "90%", md: "65%" }} // Adjust width for smaller screens
      mx="auto"
      borderRadius="50px"
      mb={10}
      p={4}
      color="white"
    >
      <Flex
        direction={{ base: "column", md: "row" }} // Adjust flex direction for smaller screens
        align="center"
        justify="space-between"
      >
        <Box
          textAlign="left"
          w={{ base: "100%", md: "75%" }} // Set width to 100% for smaller screens
          mb={{ base: 6, md: 0 }} // Add bottom margin for smaller screens
        >
          <Text
            fontSize={{ base: "3xl", md: "6xl" }} // Adjust text size for smaller screens
            fontWeight="bold"
            color="white"
            mb={-3}
            ml={{ base: 0, md: 35 }} // Add left margin for larger screens
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
            ml={{ base: 0, md: 35 }} // Add margins for larger screens
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
          boxSize={{ base: "60%", md: "40%" }} // Adjust image size for smaller screens
        />
      </Flex>
    </Box>
  );
};
