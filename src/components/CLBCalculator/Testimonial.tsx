import React from "react";
import { Box, Text, Avatar, Flex, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  avatarSrc?: string;
  delay: number;
  size: "sm" | "md" | "lg";
  position: {
    x: string;
    y: string;
  };
}

export const Testimonial: React.FC<TestimonialProps> = ({
  content,
  name,
  role,
  avatarSrc,
  delay,
  size,
  position,
}) => {
  // Dynamic styling based on size - increased all sizes by ~20%
  const bubbleSize = {
    sm: { width: "300px", p: 5 },
    md: { width: "350px", p: 6 },
    lg: { width: "400px", p: 7 },
  };

  // Increased font sizes for testimonial text
  const contentFontSize = {
    sm: { base: "md", md: "md" },
    md: { base: "md", md: "lg" },
    lg: { base: "lg", md: "xl" },
  };

  const bubbleBg = useColorModeValue(
    "rgba(255, 255, 255, 0.85)",
    "rgba(45, 55, 72, 0.85)"
  );

  const textColor = useColorModeValue("gray.700", "gray.100");
  const nameColor = useColorModeValue("blue.600", "blue.300");
  const roleColor = useColorModeValue("gray.600", "gray.400");

  // Random bubble tail direction (left or right)
  const tailDirection = Math.random() > 0.5 ? "left" : "right";

  return (
    <MotionBox
      position="absolute"
      left={position.x}
      top={position.y}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        x: [0, Math.random() > 0.5 ? 15 : -15, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.8 },
        y: { delay, duration: 0.8 },
        x: {
          delay: delay + 0.4,
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      zIndex={1}
    >
      <MotionBox
        {...bubbleSize[size]}
        borderRadius="2xl"
        bg={bubbleBg}
        boxShadow="xl"
        backdropFilter="blur(8px)"
        position="relative"
        _before={
          tailDirection === "left"
            ? {
                content: '""',
                position: "absolute",
                bottom: "-16px", // Increased tail size
                left: "24px",
                borderWidth: "16px 16px 0", // Increased border width
                borderStyle: "solid",
                borderColor: `${bubbleBg} transparent transparent`,
                filter: "drop-shadow(0 3px 3px rgba(0,0,0,0.1))",
              }
            : {
                content: '""',
                position: "absolute",
                bottom: "-16px", // Increased tail size
                right: "24px",
                borderWidth: "16px 16px 0", // Increased border width
                borderStyle: "solid",
                borderColor: `${bubbleBg} transparent transparent`,
                filter: "drop-shadow(0 3px 3px rgba(0,0,0,0.1))",
              }
        }
        whileHover={{ scale: 1.03 }}
        transition={{ scale: { duration: 0.2 } }}
      >
        <Text
          fontSize={contentFontSize[size]}
          color={textColor}
          fontWeight="medium"
        >
          "{content}"
        </Text>
      </MotionBox>

      <Flex
        mt={5}
        align="center"
        justify={tailDirection === "left" ? "flex-start" : "flex-end"}
        pl={tailDirection === "left" ? 6 : 0}
        pr={tailDirection === "right" ? 6 : 0}
      >
        <Avatar
          size="md" // Increased from sm to md
          name={name}
          src={avatarSrc}
          mr={3}
          border="3px solid white" // Increased border size
          boxShadow="lg"
        />
        <Box>
          <Text fontWeight="bold" color={nameColor} fontSize="md">
            {" "}
            {/* Increased from sm to md */}
            {name}
          </Text>
          <Text fontSize="sm" color={roleColor}>
            {" "}
            {/* Increased from xs to sm */}
            {role}
          </Text>
        </Box>
      </Flex>
    </MotionBox>
  );
};
