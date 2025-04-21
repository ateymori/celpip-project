import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const buttonAnimation = useAnimation();

  const bgGradient = useColorModeValue(
    "linear(to-br, blue.400, purple.500)",
    "linear(to-br, blue.900, purple.800)"
  );
  const headingColor = useColorModeValue("white", "white");
  const titleColor = useColorModeValue("white", "white");
  const textColor = useColorModeValue("whiteAlpha.900", "whiteAlpha.900");
  const buttonBgColor = useColorModeValue("red.500", "red.400");
  const buttonHoverBgColor = useColorModeValue("red.600", "red.300");
  const buttonRingColor = useColorModeValue("gray.200", "gray.700");

  // Animation for the dynamic background
  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 20,
      },
    });

    // Pulsing animation for the button
    buttonAnimation.start({
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0px rgba(255, 99, 71, 0.5)",
        "0 0 0 10px rgba(255, 99, 71, 0.2)",
        "0 0 0 0px rgba(255, 99, 71, 0.5)",
      ],
      transition: {
        repeat: Infinity,
        duration: 3,
      },
    });
  }, [controls, buttonAnimation]);

  return (
    <MotionBox
      as="section"
      height="100vh"
      width="100%"
      position="relative"
      overflow="hidden"
      bgGradient={bgGradient}
      bgSize="200% 200%"
      animate={controls}
    >
      {/* Dynamic background elements */}
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        width="full"
        height="full"
        bgImage="linear-gradient(120deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)"
        zIndex={0}
      />

      {/* Animated circles in the background */}
      {[...Array(5)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width={["200px", "300px", "400px"]}
          height={["200px", "300px", "400px"]}
          borderRadius="full"
          bg="whiteAlpha.100"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          zIndex={0}
          animate={{
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20],
            scale: [1, Math.random() * 0.2 + 0.9],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 8 + Math.random() * 7,
          }}
        />
      ))}

      <Container
        maxW="container.xl"
        height="100%"
        position="relative"
        zIndex={1}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          height="100%"
          textAlign="center"
        >
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            mb={2}
          >
            <Text
              color={titleColor}
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              letterSpacing="wider"
            >
              WELCOME TO
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            mb={6}
          >
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color={headingColor}
              textTransform="uppercase"
              textShadow="0 2px 10px rgba(0,0,0,0.3)"
            >
              CELPIP TEST
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            maxW="700px"
            mb={16}
          >
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color={textColor}
              fontWeight="medium"
              lineHeight="tall"
            >
              {t(
                "hero.subtitle",
                "Master the test with our comprehensive practice resources designed for your success"
              )}
            </Text>
          </MotionBox>

          {/* Car Start Button */}
          <MotionBox
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 1,
            }}
          >
            <Flex direction="column" align="center" justify="center">
              <MotionButton
                as="a"
                href="#start-test"
                height={{ base: "100px", md: "120px" }}
                width={{ base: "100px", md: "120px" }}
                borderRadius="full"
                bg={buttonBgColor}
                color="white"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="bold"
                position="relative"
                boxShadow={`0 0 0 8px ${buttonRingColor}, 0 8px 16px rgba(0,0,0,0.4)`}
                _hover={{
                  bg: buttonHoverBgColor,
                  transform: "translateY(-2px)",
                }}
                _active={{
                  transform: "translateY(1px)",
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.95 }}
                animate={buttonAnimation}
                aria-label={t("hero.startTest", "Start a test")}
              >
                {/* Inner button design */}
                <Flex
                  position="absolute"
                  inset="0"
                  justify="center"
                  align="center"
                  flexDirection="column"
                  borderRadius="full"
                >
                  <Text
                    fontWeight="extrabold"
                    fontSize={{ base: "lg", md: "xl" }}
                  >
                    START
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} mt={1}>
                    TEST
                  </Text>
                </Flex>
              </MotionButton>

              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                mt={4}
              >
                <Text
                  color="whiteAlpha.900"
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                >
                  {t("hero.clickToStart", "Click to begin")}
                </Text>
              </MotionBox>
            </Flex>
          </MotionBox>
        </Flex>
      </Container>
    </MotionBox>
  );
};

export default HeroSection;
