import React from "react";
import {
  IconButton,
  Link,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

const MotionIconButton = motion(IconButton);

interface SocialIconProps {
  label: string;
  href: string;
  icon: IconType;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  label,
  href,
  icon,
}) => {
  return (
    <Link href={href} isExternal aria-label={label}>
      <MotionIconButton
        aria-label={label}
        variant="ghost"
        size="md"
        fontSize="lg"
        icon={React.createElement(icon)}
        isRound
        _hover={{
          bg: useColorModeValue("blue.50", "blue.800"),
          color: useColorModeValue("blue.600", "blue.300"),
          transform: "translateY(-2px)",
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Link>
  );
};
