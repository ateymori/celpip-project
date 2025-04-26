import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { HeroSection } from "./components/HeroSection";
import { ColorModeToggle } from "./components/ColorModeToggle";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh">
        <ColorModeToggle
          position="fixed"
          top="20px"
          right="20px"
          zIndex={1000}
          size="lg"
        />
        <HeroSection />
      </Box>
    </ChakraProvider>
  );
}

export default App;
