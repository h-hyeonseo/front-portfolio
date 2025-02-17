import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import styles from './Portfolio2.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <motion.section 
      id="portfolio2"   
      className={styles.section} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className={styles.portfolioContent}>
        <div className={styles.projectImage}>
          <Slider {...settings}>
            <div>
              <img src="/img/설문조사1.png" alt="프로젝트 이미지 1" />
            </div>
            <div>
              <img src="/img/설문조사2.png" alt="프로젝트 이미지 2" />
            </div>
            <div>
              <img src="/img/설문조사3.png" alt="프로젝트 이미지 3" />
            </div>
            <div>
              <img src="/img/설문조사4.png" alt="프로젝트 이미지 4" />
            </div>
          </Slider>
        </div>
        <div className={styles.projectInfo}>
          <h3>도서관 이용 만족도 설문조사 사이트</h3>
          <hr/>
          <div className={styles.projectInfoList}>
            <div>
              <p className={styles.projectInfoDate}>2024.12.17 – 2024.12.19</p>
            </div>
          </div>
          <div className={styles.projectInfoDescription}>
            <p>이용자가 설문조사 시 실시간으로 결과가 차트에 반영되는 웹 사이트입니다. Springboot, Thymeleaf를 사용해 서버에 전달된 데이터를 동적으로 처리했습니다. Table 구성을 통해 참여자의 수와 신분별 응답을 표 형태로 확인하며 Chart.js 라이브러리를 활용해 데이터를 그래프로 비교할 수 있습니다.
            </p>
          </div>
          <div className={styles.skills}>
            <button>Springboot</button>
            <button>Thymeleaf</button>
            <button>Javascript</button>
            <div className={styles.githubbtn}>
              <a href="https://github.com/h-hyeonseo/librarychart.git" target="_blank" rel="noopener noreferrer">
                <button>
                  Github
                  <img src="/img/link-white.svg" alt="링크 아이콘" className={styles.icon} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio2; 