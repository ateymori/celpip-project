import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

interface LogoProps {
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ color }) => {
  const logoColor = color || useColorModeValue("blue.600", "blue.300");

  return (
    <Box display="flex" alignItems="center">
      <MotionText
        fontSize="2xl"
        fontWeight="bold"
        letterSpacing="tight"
        color={logoColor}
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        CELPIP
        <Box
          as="span"
          color={useColorModeValue("red.500", "red.300")}
          fontWeight="extrabold"
        >
          Pro
        </Box>
      </MotionText>
    </Box>
  );
};
