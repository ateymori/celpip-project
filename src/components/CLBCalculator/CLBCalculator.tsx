import React, { useState } from "react";
import {
    Box,
    Button,
    Flex,
    SimpleGrid,
    Text,
    useToast,
} from "@chakra-ui/react";
import { CustomDropdown } from "../CustomDropdown";
import CLBScoreAnimation from "../Animations/CLBScoreAnimation";
import CountUp from "react-countup";

export const CLBCalculator: React.FC = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    const [scores, setScores] = useState<{
        reading?: number;
        writing?: number;
        listening?: number;
        speaking?: number;
    }>({});

    const [clbScore, setCLBScore] = useState<number | null>(null);
    const [errors, setErrors] = useState<{
        reading: boolean;
        writing: boolean;
        listening: boolean;
        speaking: boolean;
    }>({
        reading: false,
        writing: false,
        listening: false,
        speaking: false,
    });

    const toast = useToast();

    const handleChange = (skill: "reading" | "writing" | "listening" | "speaking", value: number | undefined) => {
        if (value === undefined) {
            // If "Select score" is chosen, clear the value and mark it as an error
            setScores((prev) => ({ ...prev, [skill]: undefined }));
            setErrors((prev) => ({ ...prev, [skill]: true }));
        } else {
            // Update the score and clear the error
            setScores((prev) => ({ ...prev, [skill]: value }));
            setErrors((prev) => ({ ...prev, [skill]: false }));
        }
    };

    const calculateCLBScore = () => {
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
        }, 1000);
    };

    const skills: Array<"reading" | "writing" | "listening" | "speaking"> = [
        "reading",
        "writing",
        "listening",
        "speaking",
    ];

    const dropdownOptions = [10, 9, 8, 7, 6, 5, 4];

    return (
        <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            minHeight="100vh"
            padding={{ base: "4.5rem 1.5rem", lg: "6rem 2rem" }}
            overflow="hidden"
        >
            {/* Animation */}
            {showAnimation && <CLBScoreAnimation />}

            {/* Main Calculator */}
            <Box
            position="relative"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
                maxWidth="1200px"
                // bg="gray.700"
                bg="radial-gradient(circle, rgba(31,37,82,1) 0%, rgba(18,22,47,1) 95%, rgba(17,21,44,1) 100%)"
                padding="2rem"
                borderRadius="10px"
                // filter={showAnimation ? "blur(4px)" : "none"}
            >
                <Text fontSize="2xl" fontWeight="bold" mb="6" textAlign="center">
                    CLB Calculator
                </Text>

                {/* Horizontal Layout for Dropdowns */}

                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 4 }}
                    spacing="2rem"
                    alignItems="center"
                    width="100%"
                 >
                    {skills.map((skill) => (
                        <Box key={skill}>
                            <CustomDropdown
                                skill={skill}
                                options={dropdownOptions}
                                value={scores[skill]}
                                onChange={(value) => handleChange(skill, value)}
                                isInvalid={errors[skill]}
                            />
                        </Box>
                    ))}
                </SimpleGrid>

                <Button
                    width={{ base: "100%", lg: "fit-content" }}
                    bg="gold"
                    color="gray.800"
                    padding="1.5rem"
                    marginTop="2rem"
                    _hover={{ transform: "scale(1.1)", border: "none" }}
                    _focus={{ outline: "none" }}
                    onClick={calculateCLBScore}
                >
                    Calculate Score
                </Button>

                {clbScore !== null && (
                    <Box
                        width="100%"
                        bg="teal"
                        color="#fff"
                        padding="1rem"
                        marginTop="2rem"
                        border="none"
                        borderRadius="lg"
                        textAlign="center"
                    >
                        <Text fontSize="lg" fontWeight="bold">
                            Your CLB Score
                        </Text>
                        <Text fontSize="4rem" fontWeight="bold" color="#fff">
                            <CountUp start={0} end={clbScore} duration={1} delay={0} />
                        </Text>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
