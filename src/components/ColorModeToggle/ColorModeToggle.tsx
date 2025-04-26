import React from "react";
import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionIconButton = motion(IconButton);

interface ColorModeToggleProps {
  size?: string;
  position?: "fixed" | "absolute" | "relative" | "static" | "sticky";
  top?: string | number;
  right?: string | number;
  zIndex?: number;
}

export const ColorModeToggle: React.FC<ColorModeToggleProps> = ({
  size = "md",
  position = "relative",
  top,
  right,
  zIndex,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  // Different styling based on color mode
  const bgColor = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("blue.600", "yellow.400");

  return (
    <Box position={position} top={top} right={right} zIndex={zIndex}>
      <MotionIconButton
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        variant="outline"
        colorScheme={isDark ? "yellow" : "blue"}
        icon={isDark ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
        size={size}
        isRound
        bg={bgColor}
        color={color}
        _hover={{
          transform: "scale(1.05)",
        }}
        whileTap={{ scale: 0.95 }}
        whileHover={{
          rotate: isDark ? 15 : -15,
        }}
        transition={{
          duration: 0.2,
        }}
        boxShadow="sm"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      />
    </Box>
  );
};
