import React, { useState, useCallback, useMemo } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useToast,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import CLBScoreAnimation from "../Animations/CLBScoreAnimation";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SkillSelector from "./SkillSelector";
import { TestimonialsSection } from "./TestimonialsSection";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionContainer = motion(Container);

// Type definitions
type SkillType = "reading" | "writing" | "listening" | "speaking";
type ScoresType = {
  reading?: number;
  writing?: number;
  listening?: number;
  speaking?: number;
};
type ErrorsType = {
  reading: boolean;
  writing: boolean;
  listening: boolean;
  speaking: boolean;
};

// Static data
const skills: SkillType[] = ["reading", "writing", "listening", "speaking"];
const dropdownOptions = [10, 9, 8, 7, 6, 5, 4];

export const CLBCalculator: React.FC = () => {
  // States
  const [showAnimation, setShowAnimation] = useState(false);
  const [scores, setScores] = useState<ScoresType>({});
  const [clbScore, setCLBScore] = useState<number | null>(null);
  const [errors, setErrors] = useState<ErrorsType>({
    reading: false,
    writing: false,
    listening: false,
    speaking: false,
  });

  const toast = useToast();

  // Colors for the modern UI - memoize to prevent recalculations
  const uiColors = useMemo(
    () => ({
      bgGradient: useColorModeValue(
        "linear(to-br, blue.500, purple.600)",
        "linear(to-br, blue.800, purple.900)"
      ),
      cardBg: useColorModeValue(
        "rgba(255, 255, 255, 0.9)",
        "rgba(26, 32, 44, 0.8)"
      ),
      buttonBg: useColorModeValue("red.500", "red.400"),
      buttonHoverBg: useColorModeValue("red.600", "red.300"),
      resultBg: useColorModeValue(
        "linear(to-r, teal.400, blue.500)",
        "linear(to-r, teal.500, blue.600)"
      ),
    }),
    []
  );

  // Background circles data - memoize to prevent recalculations on re-render
  const backgroundCircles = useMemo(
    () =>
      [...Array(5)].map((_, i) => ({
        key: i,
        width: ["100px", "150px", "200px"],
        height: ["100px", "150px", "200px"],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animateX: Math.random() * 30 - 15,
        animateY: Math.random() * 30 - 15,
        animateScale: Math.random() * 0.2 + 0.9,
        duration: 8 + Math.random() * 7,
      })),
    []
  );

  // Callbacks
  const handleChange = useCallback(
    (skill: SkillType, value: number | undefined) => {
      setScores((prev) => {
        const newScores = { ...prev };
        newScores[skill] = value;
        return newScores;
      });

      setErrors((prev) => {
        const newErrors = { ...prev };
        newErrors[skill] = value === undefined;
        return newErrors;
      });
    },
    []
  );

  const calculateCLBScore = useCallback(() => {
    const { reading, writing, listening, speaking } = scores;

    // Validate inputs
    const newErrors = {
      reading: reading === undefined,
      writing: writing === undefined,
      listening: listening === undefined,
      speaking: speaking === undefined,
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      toast({
        title: "Error",
        description: "Please fill in all the fields.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setShowAnimation(true);

    // Simulate processing time with a timeout
    setTimeout(() => {
      const clb = Math.min(
        reading ?? Infinity,
        writing ?? Infinity,
        listening ?? Infinity,
        speaking ?? Infinity
      );

      setCLBScore(clb);
      setShowAnimation(false);
    }, 1500);
  }, [scores, toast]);

  // Memoized result content to prevent re-rendering when other states change
  const resultContent = useMemo(() => {
    if (clbScore === null) return null;

    return (
      <MotionBox
        mt={10}
        p={6}
        borderRadius="lg"
        bgGradient={uiColors.resultBg}
        boxShadow="lg"
        textAlign="center"
        color="white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium" mb={1}>
          Your Canadian Language Benchmark
        </Text>
        <Flex justify="center" align="center" direction="column">
          <Box
            width="140px"
            height="140px"
            borderRadius="full"
            bg="rgba(255,255,255,0.2)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="inset 0 0 20px rgba(0,0,0,0.1)"
            position="relative"
            my={4}
            overflow="hidden"
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "100%",
              }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <MotionText
              fontSize="6xl"
              fontWeight="bold"
              lineHeight="1"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.2,
              }}
            >
              <CountUp start={0} end={clbScore} duration={1.5} delay={0} />
            </MotionText>
          </Box>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium" mt={2}>
            {clbScore >= 9
              ? "Advanced Proficiency"
              : clbScore >= 7
              ? "High Intermediate"
              : clbScore >= 5
              ? "Intermediate"
              : "Basic Proficiency"}
          </Text>
        </Flex>
      </MotionBox>
    );
  }, [clbScore, uiColors.resultBg]);

  // Main component render
  return (
    <MotionBox
      position="relative"
      width="100%"
      minHeight="100vh"
      bgGradient={uiColors.bgGradient}
      bgSize="200% 200%"
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 20,
      }}
      overflow="hidden"
      py={20}
      id="clb-calculator"
    >
      {/* Background circles */}
      {backgroundCircles.map((circle) => (
        <MotionBox
          key={circle.key}
          position="absolute"
          width={circle.width}
          height={circle.height}
          borderRadius="full"
          bg="whiteAlpha.100"
          top={circle.top}
          left={circle.left}
          zIndex={0}
          animate={{
            x: [0, circle.animateX],
            y: [0, circle.animateY],
            scale: [1, circle.animateScale],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: circle.duration,
          }}
        />
      ))}

      {/* Animation overlay */}
      {showAnimation && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={10}
          bg="rgba(0,0,0,0.7)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CLBScoreAnimation />
        </Box>
      )}

      {/* Main content */}
      <MotionContainer
        maxW="container.lg"
        position="relative"
        zIndex={1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <MotionHeading
          textAlign="center"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="white"
          mb={6}
          textShadow="0 2px 10px rgba(0,0,0,0.3)"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          CLB Calculator
        </MotionHeading>

        <MotionText
          textAlign="center"
          fontSize={{ base: "md", md: "lg" }}
          color="whiteAlpha.900"
          mb={12}
          maxW="700px"
          mx="auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Determine your Canadian Language Benchmark level by entering your
          CELPIP scores below
        </MotionText>

        {/* Card container */}
        <MotionBox
          bg={uiColors.cardBg}
          borderRadius="xl"
          boxShadow="xl"
          p={{ base: 6, md: 8 }}
          backdropFilter="blur(10px)"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Skills grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 8 }}
            mb={8}
          >
            {skills.map((skill, index) => (
              <SkillSelector
                key={skill}
                skill={skill}
                value={scores[skill]}
                options={dropdownOptions}
                isInvalid={errors[skill]}
                onChange={handleChange}
                index={index}
              />
            ))}
          </SimpleGrid>

          {/* Calculate button */}
          <Flex justifyContent="center" mt={6}>
            <MotionButton
              size="lg"
              bg={uiColors.buttonBg}
              color="white"
              px={10}
              py={7}
              fontWeight="bold"
              borderRadius="full"
              _hover={{
                bg: uiColors.buttonHoverBg,
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              _active={{
                transform: "translateY(0)",
              }}
              onClick={calculateCLBScore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              Calculate My CLB Score
            </MotionButton>
          </Flex>

          {/* Results - rendered conditionally */}
          {resultContent}
        </MotionBox>
        <TestimonialsSection />
      </MotionContainer>
    </MotionBox>
  );
};
