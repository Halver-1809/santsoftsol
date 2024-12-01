import React from "react";
import { Spinner, Box } from "@chakra-ui/react";

export const FullScreenLoading = () => {
  /* preueba */
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Box>
  );
};
