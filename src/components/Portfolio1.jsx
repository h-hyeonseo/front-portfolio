import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import styles from './Portfolio1.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio1() {
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
      id="portfolio1"   
      className={styles.section} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className={styles.portfolioContent}>
        <div className={styles.projectInfo}>
          <h3>서울시 공공 자전거 대여소 실시간 정보 안내</h3>
          <hr/>
          <div className={styles.projectInfoList}>
            <div>
              <p className={styles.projectInfoDate}>2024.10.25 – 2024.11.12</p>
            </div>
          </div>
          <div className={styles.projectInfoDescription}>
            <p>서울시 공공 자전거 대여소 정보를 실시간으로 안내하는 사이트입니다. 공공데이터 API를 활용해 대여소별 주소와 대여 가능한 자전거 대수를 확인할 수 있으며, 지도 API를 통해 이를 시각적으로 표현했습니다.</p>
          </div>
          <div className={styles.skills}>
            <button>Javascript</button>
            <button>jQuery</button>
            <button>Node.js</button>
            <button>Python</button>
            <div className={styles.githubbtn}>
              <a href="https://github.com/h-hyeonseo/seoul_bikeinfo.git" target="_blank" rel="noopener noreferrer">
                <button>
                  Github
                  <img src="/img/link-white.svg" alt="링크 아이콘" className={styles.icon} />
                </button>
              </a>
            </div>
          </div>

          {/* <img src="/img/github.png" alt="깃허브 로고" className={styles.githubLogo}/> */}


        </div>
        <div className={styles.projectImage}>
          <Slider {...settings}>
            <div>
              <img src="/img/따릉이1.png" alt="프로젝트 이미지 1" />
            </div>
            <div>
              <img src="/img/따릉이2.png" alt="프로젝트 이미지 2" />
            </div>
          </Slider>
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio1; 