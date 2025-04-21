import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Flex,
  Heading,
  Icon,
  Input,
  Button,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaArrowRight,
} from "react-icons/fa";
import { SocialIcon } from "./SocialIcon";
import { Logo } from "./Logo";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionStack = motion(Stack);

export const Footer: React.FC = () => {
  const bgColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("blue.500", "blue.300");

  const gradientBg = useColorModeValue(
    "linear(to-b, gray.50, white)",
    "linear(to-b, gray.900, rgba(26, 32, 44, 0.8))"
  );

  return (
    <MotionBox
      bg={bgColor}
      color={textColor}
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={borderColor}
      position="relative"
      overflow="hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Decorative Gradient Elements */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="100%"
        bgGradient={gradientBg}
        opacity="0.7"
        zIndex="0"
      />

      <MotionBox
        position="absolute"
        width="300px"
        height="300px"
        borderRadius="full"
        bg={useColorModeValue("blue.50", "blue.900")}
        opacity="0.1"
        top="-100px"
        left="-100px"
        zIndex="0"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <MotionBox
        position="absolute"
        width="200px"
        height="200px"
        borderRadius="full"
        bg={useColorModeValue("purple.50", "purple.900")}
        opacity="0.1"
        bottom="-50px"
        right="10%"
        zIndex="0"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <Container
        as={Stack}
        maxW={"1400px"}
        py={10}
        position="relative"
        zIndex="1"
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <MotionStack
            spacing={6}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Box>
              <Logo color={accentColor} />
            </Box>
            <Text fontSize={"sm"}>
              Helping immigrants succeed in their language tests and achieve
              their Canadian dreams since 2020.
            </Text>
            <MotionStack
              direction={"row"}
              spacing={6}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <SocialIcon label="Twitter" href={"#"} icon={FaTwitter} />
              <SocialIcon label="YouTube" href={"#"} icon={FaYoutube} />
              <SocialIcon label="Instagram" href={"#"} icon={FaInstagram} />
              <SocialIcon label="LinkedIn" href={"#"} icon={FaLinkedin} />
              <SocialIcon label="Facebook" href={"#"} icon={FaFacebook} />
            </MotionStack>
          </MotionStack>

          <MotionStack
            align={"flex-start"}
            spacing={4}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Heading as="h2" fontSize={"lg"} color={headingColor} mb={2}>
              Resources
            </Heading>
            <Link href={"#"}>CLB Calculator</Link>
            <Link href={"#"}>Practice Tests</Link>
            <Link href={"#"}>Free Guides</Link>
            <Link href={"#"}>Study Materials</Link>
            <Link href={"#"}>Events</Link>
          </MotionStack>

          <MotionStack
            align={"flex-start"}
            spacing={4}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heading as="h2" fontSize={"lg"} color={headingColor} mb={2}>
              Company
            </Heading>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Testimonials</Link>
          </MotionStack>

          <MotionStack
            align={"flex-start"}
            spacing={4}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Heading as="h2" fontSize={"lg"} color={headingColor} mb={2}>
              Stay Connected
            </Heading>
            <Text>Subscribe to our newsletter for the latest updates.</Text>
            <MotionFlex
              direction={"column"}
              gap={2}
              w="100%"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Flex>
                <Input
                  placeholder={"Your email address"}
                  bg={useColorModeValue("white", "whiteAlpha.100")}
                  border={1}
                  borderColor={borderColor}
                  _focus={{
                    bg: useColorModeValue("white", "whiteAlpha.300"),
                    borderColor: accentColor,
                  }}
                  _hover={{
                    borderColor: accentColor,
                  }}
                  rounded="md"
                  mr={2}
                />
                <IconButton
                  bg={accentColor}
                  color={"white"}
                  _hover={{
                    bg: useColorModeValue("blue.600", "blue.400"),
                  }}
                  aria-label="Subscribe"
                  icon={<FaArrowRight />}
                  rounded="md"
                />
              </Flex>
              <Text fontSize="xs">
                We respect your privacy. Unsubscribe at any time.
              </Text>
            </MotionFlex>
          </MotionStack>
        </SimpleGrid>

        <Divider my={6} borderColor={borderColor} />

        <MotionFlex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
          fontSize={"sm"}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Text>
            © {new Date().getFullYear()} CELPIP Project. All rights reserved
          </Text>
          <Stack direction={"row"} spacing={6} mt={{ base: 4, md: 0 }}>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Cookie Policy</Link>
          </Stack>
        </MotionFlex>
      </Container>
    </MotionBox>
  );
};
