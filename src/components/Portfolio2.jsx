import React from 'react';
import { motion } from 'framer-motion';

function Portfolio2() {
  return (
    <motion.section 
      id="portfolio2" 
      className="section" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2>포트폴리오 2</h2>
      <p>프로젝트 2 설명...</p>
    </motion.section>
  );
}

export default Portfolio2; 