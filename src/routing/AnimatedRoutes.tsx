import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;