import React from 'react';
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import findIcon from '../../images/search-icon.svg'

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <div className="search__wrap">
            <input placeholder="Фильм" className="search__input" required/>
            <button type="submit" className="search__submit" />
            <FilterCheckbox filterText="Короткометражки" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;