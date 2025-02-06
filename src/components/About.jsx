import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.section 
      id="about" 
      className="about-section" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2>ABOUT ME</h2>

        <img src='./img/profile.jpg' alt="Profile" />

      <div className="about-content">
        <div className="about-text">
        <p>안녕하세요! 프론트엔드 개발자 홍현서입니다.
        대학 시절 <span className="highlight">UI/UX</span>를 전공하며 디자인과 기획 경험을 쌓았고, <span className="highlight">웹 개발 풀스택 과정</span>을 통해 프론트엔드 개발 역량을 키웠습니다.
        현재는 <span className="highlight">React</span>를 중심으로 프론트엔드 개발에 집중하며, <span className="highlight">Spring Boot</span>를 활용한 백엔드 연동 기술도 익히고 있습니다.
        또한, <span className="highlight">Figma</span>를 활용한 UI/UX 설계를 통해 사용자 경험을 최적화할 수 있습니다.
        디자인과 기능의 조화를 코드로 구현하는 개발자로 성장해 나가고자 합니다🚀</p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p><span className="date">2020.03 - 2024.08</span> 서원대학교 미디어콘텐츠학부 멀티미디어전공 졸업</p>
          <p><span className="date">2024.09 - 2025.02</span> 구로디지털훈련센터 디지털아카데미 웹 개발 풀스택 과정 수료</p>
        </div>
        <div className="skills">
          <button>REACT</button>
          <button>VUE.JS</button>
          <button>JAVASCRIPT</button>
          <button>HTML</button>
          <button>CSS</button>
          <button>FIGMA</button>
        </div>
      </div>
    </motion.section>
  );
}

export default About; 