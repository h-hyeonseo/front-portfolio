import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import styles from './Portfolio3.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio3() {
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
      id="portfolio3"   
      className={styles.section} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className={styles.portfolioContent}>
        <div className={styles.projectInfo}>
          <h3>카페 KOKEE TEA 웹 사이트</h3>
          <hr/>
          <div className={styles.projectInfoList}>
            <div>
              <p className={styles.projectInfoDate}>2025.01.20 - 진행 중</p>
            </div>
          </div>
          <div className={styles.projectInfoDescription}>
            <p>KOKEE TEA 브랜드의 웹사이트로, 카페 및 브랜드 정보를 제공하며 고객이 메뉴를 주문하고 결제할 수 있습니다. Spring Boot와의 연동을 통해 사용자 정보, 메뉴, 공지사항 등을 실시간으로 불러오고 효율적으로 관리합니다.
            </p>
          </div>
          <div className={styles.skills}>
            <button>React</button>
            <button>Spring Boot</button>
            <button>MariaDB</button>
            <div className={styles.githubbtn}>
              <a href="https://github.com/h-hyeonseo/kokeeTea-main.git" target="_blank" rel="noopener noreferrer">
                <button>
                  Github
                  <img src="/img/link-white.svg" alt="링크 아이콘" className={styles.icon} />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.projectImage}>
          <Slider {...settings}>
            <div>
              <img src="/img/메인웹1.png" alt="프로젝트 이미지 1" />
            </div>
            <div>
              <img src="/img/메인웹2.png" alt="프로젝트 이미지 2" />
            </div>
            <div>
              <img src="/img/메인웹3.png" alt="프로젝트 이미지 3" />
            </div>
            <div>
              <img src="/img/메인웹5.png" alt="프로젝트 이미지 4" />
            </div>
            <div>
              <img src="/img/메인웹4.png" alt="프로젝트 이미지 5" />
            </div>
          </Slider>
        </div>
      </div>

    </motion.section>
  );
}

export default Portfolio3; 