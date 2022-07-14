import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h6 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h6>
        <div className="footer__bottom">
          <p className="footer__year">&#169; 2022</p>
          <div className="footer__links">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__link"
              href="https://github.com/Gregory-mcbit"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="footer__link"
              href="https://t.me/Gregory_McProger"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
