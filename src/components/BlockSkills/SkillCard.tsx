import React from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  ResponsiveValue,
  useColorModeValue,
} from "@chakra-ui/react";
import AnimatingNumber from "./AnimatingNumber";
import { motion } from 'framer-motion';

interface SkillCardProps {
  // ----------- Container Properties -----------
  width?: ResponsiveValue<string>;
  height?: ResponsiveValue<string>;
  backgroundColor?: { light: string; dark: string };
  borderColor?: { light: string; dark: string };

  // ----------- Text Properties -----------
  text?: string;
  textColor?: { light: string; dark: string };
  textSize?: ResponsiveValue<string>;

  // ----------- Number Properties -----------
  startNumber?: number;
  endNumber: number;
  duration?: number;
  delay?: number;
  numberFontSize?: ResponsiveValue<string>;
  numberColor?: { light: string; dark: string };
  hasPlusSign?: boolean;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  // ----------- Container Properties -----------
  width = { lg: "20rem" },
  height = { lg: "15rem" },
  backgroundColor = { 
    light: "#11152C", 
    dark: "radial-gradient(circle, rgba(31,37,82,1) 0%, rgba(18,22,47,1) 95%, rgba(17,21,44,1) 100%)" },
    // dark: "#11152c" },

  borderColor = {
    light: "linear-gradient(to left, transparent, #7F43FB, transparent)",
    dark: "linear-gradient(to left, transparent, #7F43FB, transparent)",
  },

  // ----------- Text Properties -----------
  text,
  textColor = { light: "white", dark: "white" },
  textSize = "1rem",

  // ----------- Number Properties -----------
  startNumber = 0,
  endNumber,
  duration = 5,
  delay = 0.2,
  numberFontSize = "2rem",
  numberColor = { light: "white", dark: "white" },
  hasPlusSign = false,
}) => {

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 7 }}
      whileTap={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 5,
      }}
    >
      <Flex justifyContent="center" alignItems="center" cursor="pointer">
        <Box
          position="relative"
          width={width}
          height={height}
          bg={useColorModeValue(backgroundColor.light, backgroundColor.dark)}
          borderRadius="8px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="2rem"
          overflow="hidden"
          boxShadow="0 0 30px 1px black"
        >
          {/* Border Gradient */}
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="0.2rem"
            bg={useColorModeValue(borderColor.light, borderColor.dark)}
            opacity={1}
          />

          {/* Content */}
          <VStack spacing="1rem" textAlign="center">
            {text && (
              <Text
                fontSize={textSize}
                fontWeight="bold"
                color={useColorModeValue(textColor.light, textColor.dark)} whiteSpace="nowrap"
              >
                {text}
              </Text>
            )}
            <AnimatingNumber
              fontSize={numberFontSize}
              color={{ light: numberColor.light, dark: numberColor.dark }}
              value={endNumber}
              start={startNumber}
              duration={duration}
              delay={delay}
              hasPlusSign={hasPlusSign}
            />
          </VStack>
        </Box>
      </Flex>
    </motion.div>
  );
};