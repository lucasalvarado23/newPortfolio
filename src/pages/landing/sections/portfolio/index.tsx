import React, { useEffect, useState, useCallback } from 'react';

// Plugins
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// UI Components
import PortfolioItem1 from './items/PortfolioItem1';
import PortfolioItem2 from './items/PortfolioItem2';
import PortfolioItem3 from './items/PortfolioItem3';
import PortfolioItem4 from './items/PortfolioItem4'; // New component for portfolio item 4
import PortfolioItem5 from './items/PortfolioItem5'; // New component for portfolio item 5

// Images
import portfolio1 from '../../../../assets/images/portfolio/RV.png';
import portfolio2 from '../../../../assets/images/portfolio/ophyra2.png';
import portfolio3 from '../../../../assets/images/portfolio/vnv.png';
import portfolio4 from '../../../../assets/images/portfolio/tvg.png';
import portfolio5 from '../../../../assets/images/portfolio/ninja.png';

import backArrow from '../../../../assets/images/close-left-arrow.png';
import closeIcon from '../../../../assets/images/close.png';

// Styles
import './style.css';

// Data
import portfolioData from '../../../../data/portfolio.json';

// --------------

function Portfolio() {
  const images: string[] = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
  ];

  // Portfolio item to be shown (change rendered different components in item folder)
  const [portfolioItem, setPortfolioItem] = useState<number>(0);
  // Portfolio item to be shown as a popup
  const [openPortfolio, setOpenPortfolio] = useState<number>(0);

  /**
   * Opening portfolio item that the user clicked
   *
   * @param num portfolio item to be open
   */
  const handleOpenItem = (num: number) => {
    const element: HTMLElement | null =
      document.getElementById('portfolio-wrapper');
    if (element) {
      element.scrollIntoView();
    }

    setPortfolioItem(num);
  };

  /**
   * Close Opened portfolio item and show the portfolio grid images
   */
  const handlCloseItem = () => {
    setPortfolioItem(0);
  };

  /**
   * Open a popup of the item with the given number passed to the function
   *
   * @param num Pop up item number to be open
   */
  const handleOpenPopup = (num: number) => {
    setOpenPortfolio(num);
  };

  /**
   * Closed the opened items by reseting the {openPortfolio} variable to 0
   */
  const handleClosePopup = () => {
    setOpenPortfolio(0);
  };

  return (
    <section id="portfolio" className="section">
      <h2 className="title">{portfolioData.title}</h2>
      <div className="section-des">{portfolioData.description}</div>

      <div id="portfolio-wrapper" className="relative block-right">
        {portfolioItem === 0 ? (
          <div className="grid" id="portfolio-grid">
            <div className="grid-sizer"></div>
            {portfolioData.portfolioItems.map((item, i: number) => (
              <div
                key={'port-item-' + i}
                className={'grid-item element-item ' + item.gridSize}>
                <a
                  className="item-link"
                  onClick={() => {
                    if (
                      item?.action?.type === 'item' &&
                      typeof item?.action?.number === 'number'
                    ) {
                      handleOpenItem(item.action.number);
                    } else if (
                      item?.action?.type === 'popup' &&
                      typeof item?.action?.number === 'number'
                    ) {
                      handleOpenPopup(item.action.number);
                    }
                  }}>
                  <img src={images[i]} alt="portfolio image" />
                  <div className="portfolio-text-holder">
                    <div className="portfolio-text-wrapper">
                      <p className="portfolio-text">{item.description.text}</p>
                      <p className="portfolio-cat">
                        {item.description.caption}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          // Portfolio items to be opened as a separate component
          <div className="portfolio-load-content-holder">
            <div className="close-icon" role="button" onClick={handlCloseItem}>
              <img src={backArrow} alt="back arrow" />
            </div>
            {portfolioItem === 1 ? (
              <PortfolioItem1 />
            ) : portfolioItem === 2 ? (
              <PortfolioItem2 />
            ) : portfolioItem === 3 ? (
              <PortfolioItem3 />
            ) : portfolioItem === 4 ? (
              <PortfolioItem4 /> // New component for portfolio item 4
            ) : portfolioItem === 5 ? (
              <PortfolioItem5 /> // New component for portfolio item 5
            ) : (
              <></>
            )}
          </div>
        )}
      </div>

    </section>
  );
}

export default Portfolio;
