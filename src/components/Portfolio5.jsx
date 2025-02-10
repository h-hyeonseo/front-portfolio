import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import styles from './Portfolio5.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio5() {
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
      id="portfolio5"   
      className={styles.section} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className={styles.portfolioContent}>
        <div className={styles.projectInfo}>
          <h3>카페 KOKEE TEA 테이블 오더</h3>
          <hr/>
          <div className={styles.projectInfoList}>
            <div>
              <p className={styles.projectInfoDate}>2025.02.03 - 진행 중</p>
            </div>
          </div>
          <div className={styles.projectInfoDescription}>
            <p>KOKEE TEA 테이블 오더는 고객이 자리에서 편리하게 메뉴를 확인하고 주문할 수 있도록 설계되었습니다. 직원 호출 기능을 제공하여 추가 요청이나 문의가 있을 때 신속하게 도움을 받을 수 있습니다. 더치페이 기능을 지원하여 여러 명이 함께 방문했을 때 개별 결제가 가능하도록 했습니다.
            </p>
          </div>
          <div className={styles.skills}>
            <button>React</button>
            <button>Spring Boot</button>
            <button>MariaDB</button>
            <div className={styles.githubbtn}>
              <a href="https://github.com/h-hyeonseo/kokeetea-tableorder.git" target="_blank" rel="noopener noreferrer">
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
              <img src="/img/테이블오더1.png" alt="프로젝트 이미지 1" />
            </div>
            <div>
              <img src="/img/테이블오더2.png" alt="프로젝트 이미지 2" />
            </div>
            
          </Slider>
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio5; 