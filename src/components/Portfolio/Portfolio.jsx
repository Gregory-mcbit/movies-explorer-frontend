import React from 'react';
import './Portfolio.css'

function Portfolio(props) {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__projects">
        <li className="portfolio__project">
          <a className="portfolio__link" href="https://github.com/Gregory-mcbit/how-to-learn" target="_blank" rel="noreferrer">
            <p className="portfolio__name">Статичный сайт</p>
            <img className="portfolio__icon" width="18" height="17" viewBox="0 0 18 17" fill="none" alt="стрелка" href="../../images/da.png">
            </img>
          </a>
        </li>
        <li className="portfolio__project">
          <a className="portfolio__link" href="https://github.com/Gregory-mcbit/russian-travel" target="_blank" rel="noreferrer">
            <p className="portfolio__name">Адаптивный сайт</p>
            <img className="portfolio__icon" width="18" height="17" viewBox="0 0 18 17" fill="none" alt="стрелка" href="../../images/da.png">
            </img>
          </a>
        </li>
        <li className="portfolio__project">
          <a className="portfolio__link" href="https://github.com/Gregory-mcbit/react-mesto-api-full" target="_blank" rel="noreferrer">
            <p className="portfolio__name">Одностраничное приложение</p>
            <img className="portfolio__icon" width="18" height="17" viewBox="0 0 18 17" fill="none" alt="стрелка" href="../../images/da.png">
            </img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;