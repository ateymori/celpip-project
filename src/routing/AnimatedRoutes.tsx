import React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import HomePage from "./HomePage";
import { ColorModeToggle } from "../components/ColorModeToggle";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <Box position="relative">
      {/* Color Mode Toggle - will appear on all pages */}
      <ColorModeToggle
        position="fixed"
        top="20px"
        right="20px"
        zIndex={1000}
        size="lg"
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
};

export default AnimatedRoutes;
