import React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CustomDropdown } from "../CustomDropdown";

type SkillType = "reading" | "writing" | "listening" | "speaking";

interface SkillSelectorProps {
  skill: SkillType;
  value?: number;
  options: number[];
  isInvalid: boolean;
  onChange: (skill: SkillType, value: number | undefined) => void;
  index: number;
}

// Skill icons mapping
const skillIcons = {
  reading: "📚",
  writing: "✍️",
  listening: "👂",
  speaking: "🗣️",
};

const MotionBox = motion(Box);
const MotionText = motion(Text);

const SkillSelector: React.FC<SkillSelectorProps> = React.memo(
  ({ skill, value, options, isInvalid, onChange, index }) => {
    const headingColor = useColorModeValue("blue.700", "blue.200");

    const handleChange = (newValue: number | undefined) => {
      onChange(skill, newValue);
    };

    return (
      <MotionBox
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5 + index * 0.1,
        }}
      >
        <Flex direction="column" align="flex-start">
          <Flex mb={2} align="center">
            <MotionText fontSize="2xl" mr={2} aria-hidden="true">
              {skillIcons[skill]}
            </MotionText>
            <Text
              fontSize="lg"
              fontWeight="bold"
              textTransform="capitalize"
              color={headingColor}
            >
              {skill}
            </Text>
          </Flex>
          <Box width="100%">
            <CustomDropdown
              skill={skill}
              options={options}
              value={value}
              onChange={handleChange}
              isInvalid={isInvalid}
            />
          </Box>
        </Flex>
      </MotionBox>
    );
  }
);

SkillSelector.displayName = "SkillSelector";

export default SkillSelector;
