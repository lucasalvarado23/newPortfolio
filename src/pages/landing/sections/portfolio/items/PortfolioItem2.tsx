import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images//portfolio/items/ophyra.png';
import item2 from '../../../../../assets/images//portfolio/items/ophyra1.png';
import item3 from '../../../../../assets/images//portfolio/items/ophyra2.png';

// Styles
import './style.css';

// -------------------

function PortfolioItem2() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <a href='https://ophyra.com' target="_blank"><h2 className="title">Ophyra Marketing Group </h2></a>

        <p className="section-des">
          SOCIAL MEDIA, PPC, LEAD GENERATION & WEB OPTIMIZATION
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
        I successfully created and managed a diverse portfolio of over 15 websites using WordPress, showcasing my versatile skills in web development. These websites encompassed a range of functionalities, including appointment systems, e-commerce platforms, blog sites, and lead generation portals. Leveraging the flexibility of WordPress, I designed and implemented intuitive appointment scheduling systems, seamless e-commerce experiences, engaging blogs, and effective lead generation mechanisms across these sites. My approach involved a keen understanding of each website's unique requirements, ensuring a tailored and user-friendly experience for visitors. Through effective project management and a comprehensive grasp of WordPress's capabilities, I not only developed these sites but also maintained their optimal performance, contributing to a successful and varied web presence for different purposes.
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem2;
