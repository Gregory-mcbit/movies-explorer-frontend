import React from "react";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
export const SearchForm = ({
  isSaved,
  searchMovies,
  searchSavedMovies,
  isFilterMovies,
  changeFilter,
  isFilterSavedMovies,
}) => {
  const [validForm, setValidForm] = React.useState(true);
  const [textInput, setTextInput] = React.useState("");
  function handleChangeInput(e) {
    setTextInput(e.target.value);
    setValidForm(e.target.checkValidity());
  }
  function handleSearchMovies(e) {
    e.preventDefault();
    searchMovies(textInput);
    localStorage.setItem("search", textInput);
  }
  function handleSearchSavedMovies(e) {
    e.preventDefault();
    searchSavedMovies(textInput);
  }

  return (
    <>
      <form
        className="search-form"
        onSubmit={isSaved ? handleSearchSavedMovies : handleSearchMovies}
      >
        <div className="search-form__icon"></div>
        <input
          className="search-form__input"
          onChange={handleChangeInput}
          value={JSON.stringify(localStorage.getItem("search")).length === 0 ? "" : !isSaved ? JSON.stringify(localStorage.getItem("search")) : ""}
          type="text"
          placeholder="Фильм"
          required
        />
        <div className="search-form__right">
          <button
            className="search-form__button"
            disabled={!validForm}
            type="submit"
          ></button>
        </div>
        <div className="filter-checkbox">
          <FilterCheckbox
            isFilterMovies={isFilterMovies}
            changeFilter={changeFilter}
            isFilterSavedMovies={isFilterSavedMovies}
          />
        </div>
      </form>
      <span className="search-form__error">
        {validForm ? "" : "Нужно ввести ключевое слово"}
      </span>
      <div className="filter-checkbox_mobile">
        <FilterCheckbox
          isFilterMovies={isFilterMovies}
          changeFilter={changeFilter}
          isFilterSavedMovies={isFilterSavedMovies}
        />
      </div>
    </>
  );
};
