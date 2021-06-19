import React, { FC } from 'react';
import svgSprite from '../../assets/images/svgSprite.svg';
import './scss/Search.scss';

interface SearchProps {
  searchText: {
    val: string,
    onChange: () => void
  },
}

const Search: FC<SearchProps> = ({ searchText }) => (
  <div className="search">
    <label className="search__label" htmlFor="id">
      <input
        className="search__input"
        id="id"
        value={searchText.val}
        type="text"
        placeholder="search"
        onChange={searchText.onChange}
      />

      <div className="search__btn">
        <svg className="search__icon">
          <use href={`${svgSprite}#search`} />
        </svg>
      </div>
    </label>
  </div>
);

export default Search;
