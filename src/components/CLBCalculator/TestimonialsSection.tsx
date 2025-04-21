import React, { useMemo } from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Testimonial } from "./Testimonial";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export const TestimonialsSection: React.FC = () => {
  // Testimonial data with fake reviews - updated positioning for larger testimonials
  const testimonialData = useMemo(
    () => [
      {
        content:
          "The CLB Calculator helped me understand exactly where I stand for immigration requirements. So easy to use!",
        name: "Priya Singh",
        role: "Successful Applicant",
        size: "md" as const,
        position: { x: "3%", y: "10%" }, // Adjusted position for larger bubbles
        delay: 0.2,
      },
      {
        content:
          "Thanks to this tool, I finally knew which language courses to focus on. Improved my score by 2 points!",
        name: "Michael Chen",
        role: "Language Student",
        size: "lg" as const,
        position: { x: "55%", y: "5%" }, // Adjusted position for larger bubbles
        delay: 0.5,
      },
      {
        content:
          "I was confused about my CLB level until I found this calculator. So helpful for Express Entry!",
        name: "Sophia Rodriguez",
        role: "PR Applicant",
        size: "md" as const,
        position: { x: "12%", y: "48%" }, // Adjusted position for larger bubbles
        delay: 0.3,
      },
      {
        content:
          "The most accurate CLB conversion I've found. Made my immigration journey much clearer.",
        name: "Ahmed Hassan",
        role: "New Canadian",
        size: "sm" as const,
        position: { x: "62%", y: "45%" }, // Adjusted position for larger bubbles
        delay: 0.4,
      },
      {
        content:
          "As an immigration consultant, I recommend this calculator to all my clients. Simple and precise!",
        name: "Emma Thompson",
        role: "RCIC Consultant",
        size: "lg" as const,
        position: { x: "35%", y: "65%" }, // Adjusted position for larger bubbles
        delay: 0.6,
      },
    ],
    []
  );

  const sectionBg = useColorModeValue(
    "linear(to-b, transparent, blue.500, purple.600)",
    "linear(to-b, transparent, blue.800, purple.900)"
  );

  const headingColor = useColorModeValue("white", "white");

  return (
    <MotionBox
      position="relative"
      width="100%"
      minHeight="100vh" // Increased from 80vh to 100vh for more space
      mt={20}
      pt={20} // Increased from 16 to 20
      pb={32} // Increased from 24 to 32
      overflow="hidden"
      bgGradient={sectionBg}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <MotionBox
        textAlign="center"
        mb={20} // Increased from 16 to 20
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <MotionHeading
          color={headingColor}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} // Increased font sizes
          fontWeight="bold"
          textShadow="0 2px 10px rgba(0,0,0,0.2)"
        >
          What Our Users Say
        </MotionHeading>
        <Text
          color="whiteAlpha.900"
          mt={6} // Increased from 4 to 6
          maxW="700px" // Increased from 600px to 700px
          mx="auto"
          fontSize={{ base: "lg", md: "xl" }} // Increased font sizes
        >
          Join thousands who have used our CLB Calculator to advance their
          immigration journey
        </Text>
      </MotionBox>

      <Box
        position="relative"
        width="100%"
        height={{ base: "1000px", md: "750px" }} // Increased heights for more space
        maxWidth="1400px" // Increased from 1200px to 1400px
        mx="auto"
      >
        {testimonialData.map((testimonial, index) => (
          <Testimonial
            key={index}
            content={testimonial.content}
            name={testimonial.name}
            role={testimonial.role}
            delay={testimonial.delay}
            size={testimonial.size}
            position={testimonial.position}
          />
        ))}
      </Box>

      {/* Decorative elements - increased size */}
      <MotionBox
        position="absolute"
        width="200px" // Increased from 150px to 200px
        height="200px" // Increased from 150px to 200px
        borderRadius="full"
        bg="whiteAlpha.100"
        bottom="5%"
        left="10%"
        zIndex={0}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          repeatType: "reverse",
        }}
      />

      <MotionBox
        position="absolute"
        width="150px" // Increased from 100px to 150px
        height="150px" // Increased from 100px to 150px
        borderRadius="full"
        bg="whiteAlpha.100"
        top="15%"
        right="15%"
        zIndex={0}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          repeatType: "reverse",
        }}
      />

      {/* Added an extra decorative element */}
      <MotionBox
        position="absolute"
        width="180px"
        height="180px"
        borderRadius="full"
        bg="whiteAlpha.100"
        bottom="20%"
        right="8%"
        zIndex={0}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          repeatType: "reverse",
        }}
      />
    </MotionBox>
  );
};
