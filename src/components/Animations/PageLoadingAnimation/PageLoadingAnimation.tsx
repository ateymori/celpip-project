
import React, { useEffect, useRef } from "react";
import Player from "lottie-react";
import pageLoadingAnimation from "../../../assets/animations/page_loading.json";
import { Flex, useColorModeValue } from "@chakra-ui/react";

const PageLoadingAnimation = () => {
    const lottieRef = useRef<any>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(1.8);
        }
    }, []);

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="100vh"
            bg={useColorModeValue("gray.200", "gray.800")}
            overflow="hidden"
        >
            <Player
                autoplay
                loop={false}
                animationData={pageLoadingAnimation}
                style={{ width: "110px", height: "110px" }}
                lottieRef={lottieRef}
            />
        </Flex>
    );
};

export default PageLoadingAnimation;
