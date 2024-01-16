import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images//portfolio/items/ninja1.png';
import item2 from '../../../../../assets/images//portfolio/items/ninja2.png';
import item3 from '../../../../../assets/images//portfolio/items/ninja3.png';

// Styles
import './style.css';

// -------------------

function PortfolioItem5() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <a href='https://noticeninja.com' target="_blank"><h2 className="title">Notice Ninja </h2></a>

        <p className="section-des">
        Reduce the time your team spends on data entry for compliance notices with NOTICENINJA, software that automatically scans federal and state notices.
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
        I excelled as a project manager in a consulting role, leading a team of six developers to successful project outcomes. Implementing strategic measures, I optimized database queries, resulting in cost savings on AWS RDS. Additionally, my expertise extended to achieving SOC 2 compliance, ensuring robust security protocols were seamlessly integrated into project workflows. My proactive project management approach and technical acumen contributed to the overall success of the team and project objectives.
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem5;
