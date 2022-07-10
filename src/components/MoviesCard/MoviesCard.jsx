import React from 'react';
import './MoviesCard.css';
import {useLocation} from 'react-router-dom';
import testCard from '../../images/test-card.png';
import moviesIconCard from "../../images/like.svg";
import moviesSavedCardIcon from "../../images/saved_film.svg";
import saveCardIcon from "../../images/unlike.svg"

function MoviesCard(props) {
  const {pathname} = useLocation();
  const isAdded = true; // Поменять на false для проверки
  const moviesIcon = (isAdded ? moviesIconCard :  saveCardIcon)
  const cardIcon = (pathname === "/movies" ? moviesIcon : moviesSavedCardIcon)

  return (
    <li className="card">
      <div className="card__description">
        <p className="card__name">33 слова о дизайне</p>
        <p className="card__duration">1ч 42м</p>
        <img className="card__icon" src={cardIcon} alt="Тестовая иконка"/>
        <button className="card__icon" type="button" />
      </div>
      <div className="card__wrap">
        <img className="card__image" src={testCard} alt="Тестовая карточка"/>
      </div>
    </li>
  );
}

export default MoviesCard;