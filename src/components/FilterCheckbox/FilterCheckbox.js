import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox({ filterText }) {
  return (
    <div className="filter-checkbox">
      <p className="filter-checkbox__text">{filterText}</p>
      <label className="filter-checkbox__label">
        <input type="checkbox" className="filter-checkbox__input" />
        <span className="filter-checkbox__round" />
      </label>
    </div>
  );
}

export default FilterCheckbox;