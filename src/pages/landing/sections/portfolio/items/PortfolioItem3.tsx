import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images//portfolio/vnv1.png';
import item2 from '../../../../../assets/images//portfolio/vnv2.png';
import item3 from '../../../../../assets/images//portfolio/vnv3.png';

// Styles 
import './style.css';

// -------------------

function PortfolioItem3() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <a href='https://vnvevents.com' target="_blank"><h2 className="title">VNV Events </h2></a>

        <p className="section-des">
        Hight level Event Management Agency in South Florida
        </p>

        <div className="image-slider-wrapper relative block-right">
          <Swiper
            pagination={{ clickable: true }}
            loop={true}
            modules={[Pagination]}
            className="portfolio-slider">
            <SwiperSlide>
              <img src={item1} alt="portfolio item 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item2} alt="portfolio item 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item3} alt="portfolio item 1" />
            </SwiperSlide>
          </Swiper>
        </div>

        <p className="content-670">
        
I've successfully developed and managed six dynamic WordPress websites, optimizing server performance with WP Engine, fine-tuning database queries, and implementing effective on-page SEO strategies. My hands-on approach ensures optimal functionality and sustained performance for a diverse online presence.
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem3;
