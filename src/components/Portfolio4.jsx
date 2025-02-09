import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import styles from './Portfolio4.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio4() {
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
      id="portfolio4"   
      className={styles.section} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className={styles.portfolioContent}>
        <div className={styles.projectImage}>
          <Slider {...settings}>
            <div>
              <img src="/img/키오스크1.png" alt="프로젝트 이미지 1" />
            </div>
            <div>
              <img src="/img/키오스크2.png" alt="프로젝트 이미지 2" />
            </div>
            <div>
              <img src="/img/키오스크3.png" alt="프로젝트 이미지 3" />
            </div>
            <div>
              <img src="/img/키오스크4.png" alt="프로젝트 이미지 4" />
            </div>

          </Slider>
        </div>
        <div className={styles.projectInfo}>
          <h3>카페 KOKEE TEA 키오스크</h3>
          <hr/>
          <div className={styles.projectInfoList}>
            <div>
              <p className={styles.projectInfoDate}>2025.01.27 – 진행 중</p>
            </div>
          </div>
          <div className={styles.projectInfoDescription}>
            <p>KOKEE TEA 키오스크로 고객이 메뉴를 확인하고 직접 주문 및 결제를 진행할 수 있도록 설계되었습니다. 사용자가 전화번호를 입력하면 멤버십 정보를 불러오며, 쿠폰 및 적립금의 적립과 사용이 가능합니다.
            </p>
          </div>
          <div className={styles.skills}>
            <button>React</button>
            <button>Spring Boot</button>
            <button>MariaDB</button>
            <div className={styles.githubbtn}>
              <a href="https://github.com/h-hyeonseo/kokeetea-kiosk.git" target="_blank" rel="noopener noreferrer">
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

export default Portfolio4; 