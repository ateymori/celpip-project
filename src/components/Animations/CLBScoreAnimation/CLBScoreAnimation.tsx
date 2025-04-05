import React, { useEffect, useRef } from "react";
import Player from "lottie-react";
import clbScoreAnimation from "../../../assets/animations/clb_score.json";
import { Flex, useColorModeValue } from "@chakra-ui/react";

const CLBScoreAnimation = () => {
    const lottieRef = useRef<any>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(3);
        }
    }, []);

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            position="fixed" // Make the animation fill the entire screen
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg={useColorModeValue("gray.200", "gray.800")}
            overflow="hidden"
            zIndex="1000"
            opacity="0.8"
        >
            <Player
                autoplay
                loop={false}
                animationData={clbScoreAnimation}
                style={{ width: "170px", height: "170px" }}
                lottieRef={lottieRef}
            />
        </Flex>
    );
};

export default CLBScoreAnimation;