import React from "react";
import { Box, HStack, ResponsiveValue, Text, useColorModeValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface AnimatingNumberProps {
    value: number;
    start?: number;
    duration?: number;
    delay?: number;
    fontSize?: ResponsiveValue<string>;
    color?: { light: string; dark: string };
    hasPlusSign?: boolean;
}

const AnimatingNumber: React.FC<AnimatingNumberProps> = ({
    value,
    start = 0,
    duration = 3,
    delay = 0.1,
    fontSize = { base: "2rem", lg: "2rem" },
    color = { light: "white", dark: "white" },
    hasPlusSign = false,
}) => {
    const [ref, inView] = useInView({ triggerOnce: true });

    const textColor = useColorModeValue(color.light, color.dark);

    return (
        <Box ref={ref}>
            {inView && (
                <HStack>
                    {hasPlusSign && (
                        <Text fontSize={fontSize} fontWeight="bold" color={textColor}>
                            +
                        </Text>
                    )}
                    <Text fontSize={fontSize} fontWeight="bold" color={textColor}>
                        <CountUp start={start} end={value} duration={duration} delay={delay} />
                    </Text>
                </HStack>
            )}
        </Box>
    );
};

export default AnimatingNumber;
