import "./AboutMe.css";
export const AboutMe = () => {
  return (
    <section className="about" id="about">
      <h3 className="about__title">Студент</h3>
      <div className="about__content">
        <div>
          <h4 className="about__content_name">Григорий</h4>
          <p className="about__content_profession">
            Фронтенд-разработчик, 17 лет
          </p>
          <p className="about__content_description">
          Я живу в России, город Москва. Мой путь разработчика начался достаточно давно, когда мне было всего лишь 13 лет. Тогда я поступил в Яндекс.Лицей и проучился 2 года, изучая промышленное программирование на языке Python. Получив подобный опыт, мне понравилась IT-сфера, и я решился пройти курс Веб-Разработчика на платформе Яндекс.Практикума. Сейчас являюсь абитуриентом в Высшую Школу Экономики, куда давно хотел поступить. Также увлекаюсь финансовыми рынками и брижевой торговлей.
          </p>
          <div className="about__content_links">
            <a
              className="about__content_link"
              href="https://t.me/Gregory_McProger"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              className="about__content_link"
              href="https://github.com/Gregory-mcbit"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="about__content_photo"></div>
      </div>
    </section>
  );
};
