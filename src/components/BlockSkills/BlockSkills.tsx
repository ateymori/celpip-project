import React, { useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SkillCard } from "./SkillCard";

export const BlockSkills: React.FC = () => {
  const { t, i18n } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding={{ base: "4.5rem 1.5rem", lg: "6rem 2rem" }}
      bg={useColorModeValue("#e0d0a6", "#23214A")}
      overflow="hidden"
    >
      <Box
        className="header_container"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="100rem"
        width="100%"
      >
        <Text
          className="h2"
          color={useColorModeValue("gray.800", "#16F8B6")}
          marginBottom="2rem"
          fontSize={{ base: "2rem", lg: "2rem" }}
          fontWeight="bold"
          lineHeight="1.1"
        >
          {t("Choose Your Skill")}
        </Text>

        <Text
          className="p"
          color={useColorModeValue("gray.700", "white")}
          marginTop="0"
          fontSize={{ base: "1.1rem", lg: "2.1rem" }}
          lineHeight="1.1"
          paddingBottom={{ lg: "2rem" }}
        >
          {t("Choose Your Skill")}
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        maxWidth={{ md: "550px", lg: "1300px" }}
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
          spacing={{ base: "3rem", md: "4rem", lg: "3rem" }}
          padding="3rem 0"
          alignItems="center"
          width="100%"
        >
          {[
            {
              endNumber: 59,
              text: t("Listening"),
              numberColor: "#4CCFAF",
              borderColor: "#409F8F",
              hasPlusSign: true,
            },
            {
              endNumber: 65,
              text: t("Reading"),
              numberColor: "#FF5FCC",
              borderColor: "#EF40BA",
              hasPlusSign: true,
            },
            {
              endNumber: 56,
              text: t("Speaking"),
              numberColor: "#A679FF",
              borderColor: "#A679FF",
              hasPlusSign: true,
            },
            {
              endNumber: 75,
              text: t("Writing"),
              numberColor: "#FF9F24",
              borderColor: "#FF9F24",
              hasPlusSign: true,
            },
          ].map(({ endNumber, text, numberColor, borderColor, hasPlusSign }, index) => (
            <SkillCard
              key={index}
              width={{ base: "15rem", md: "13rem", lg: "12rem", xl: "15rem" }}
              height={{ base: "15rem", md: "13rem", lg: "12rem", xl: "15rem" }}
              endNumber={endNumber}
              text={text}
              hasPlusSign={hasPlusSign}
              textSize={{ base: "2rem", md: "1.8rem", lg: "1.8rem" }}
              textColor={{ light: "white", dark: "white" }}
              numberFontSize={{ base: "2rem", md: "2rem", lg: "2rem" }}
              borderColor={{
                light: `linear-gradient(to left, transparent, ${borderColor}, transparent)`,
                dark: `linear-gradient(to left, transparent, ${borderColor}, transparent)`,
              }}
              numberColor={{ light: numberColor, dark: numberColor }}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
