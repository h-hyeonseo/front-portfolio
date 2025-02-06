import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

function Home() {
  return (
    <motion.section 
      id="home" 
      className={styles.homeSection}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            FRONTEND-DEVELOPER<br />
            PORTFOLIO
          </h1>
          <p className={styles.subtitle}>
          안녕하세요. 디자인과 기능의 조화를 코드로 그려내는 프론트엔드 개발자 홍현서입니다.

          </p>
        </div>
        <div className={styles.circleDecoration}></div>
      </div>
      <div className={styles.footer}>
        <p className={styles.copyright}>
          HYEONSEO © 2025 PORTFOLIO
        </p>
      </div>
    </motion.section>
  );
}

export default Home; 