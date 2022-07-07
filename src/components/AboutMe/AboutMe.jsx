import React from 'react';
import './AboutMe.css'
import photo from '../../images/student-photo.jpg';
import Portfolio from "../Portfolio/Portfolio";

function AboutMe(props) {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__wrap">
          <div className="about-me__description">
            <div className="about-me__description">
              <h3 className="about-me__name">Григорий</h3>
              <p className="about-me__profession">Фронтенд-разработчик, 17 лет</p>
              <p className="about-me__text">я живу в России, город Москва. Мой путь разработчика начался достаточно давно, когда мне было всего лишь 13 лет. Тогда я поступил в Яндекс.Лицей и проучился 2 года, изучая промышленное программирование на языке Python. Получив подобный опыт, мне понравилась IT-сфера, и я решился пройти курс Веб-Разработчика на платформе Яндекс.Практикума. Сейчас являюсь абитуриентом в Высшую Школу Экономики, куда давно хотел поступить. Также увлекаюсь финансовыми рынками и брижевой торговлей.</p>
            </div>
            <div className="about-me__links">
              <a className="about-me__link" href="https://t.me/Gregory_McProger" target="_blank"rel="noreferrer">Telegram</a>
              <a className="about-me__link" href="https://github.com/Gregory-mcbit" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <img className="about-me__photo" src={photo} alt="Фото студента" />
        </div>
        <Portfolio/>
      </div>
    </section>
  );
}

export default AboutMe;