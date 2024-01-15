import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images//portfolio/items/rv1.png';
import item2 from '../../../../../assets/images//portfolio/items/rv2.png';
import item3 from '../../../../../assets/images//portfolio/items/rv3.png';

// Styles
import './style.css';

// -------------------


function PortfolioItem1() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
      <a href="https://thervadvisor.com" target="_blank"><h2 className="title">The RV Advisor</h2></a>

<p className="section-des">
Consumer Union formed by RVers with a common interest. Our purpose is to protect consumer rights and stand together while navigating the complex RV Industry.
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
          Played a crucial role in the transformation of RV Advisor's online platform, starting from a basic Wix landing page to a more sophisticated WordPress system and eventually to a custom PHP system capable of efficiently handling over 25,000 members. The transition from Wix to WordPress marked a shift towards a more flexible and scalable solution, while the development of the custom PHP system addressed the specific needs of a growing community. Your contributions likely focused on enhancing member management, scalability, and overall user experience. This evolution showcased your strategic approach to adapt the platform, ensuring it could meet the demands of a rapidly expanding user base while maintaining optimal performance and functionality.
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem1;
