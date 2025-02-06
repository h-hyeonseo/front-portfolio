import React from 'react';
import { motion } from 'framer-motion';

function Portfolio3() {
  return (
    <motion.section 
      id="portfolio3" 
      className="section" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2>포트폴리오 3</h2>
      <p>프로젝트 3 설명...</p>
    </motion.section>
  );
}

export default Portfolio3; 