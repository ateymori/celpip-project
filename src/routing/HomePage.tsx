import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useBreakpointValue } from "@chakra-ui/react";
import { BlockSkills } from "../components/BlockSkills";
import { CLBCalculator } from "../components/CLBCalculator";
import { HeroSection } from "../components/HeroSection";

const HomePage: React.FC = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);

  const headingSize = useBreakpointValue({ base: "2.5rem", md: "3.5rem" });

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <HeroSection />
        <BlockSkills />
        <CLBCalculator />
      </motion.div>
    </>
  );
};

export default HomePage;
