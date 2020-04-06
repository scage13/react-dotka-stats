import React, {useContext, useState} from 'react';
import './Search.sass';
import {HeroesContext} from "../../services/heroes/heroes.context";

export const Search = () => {
  const [value, setValue] = useState('');
  const {fetchHeroes} = useContext(HeroesContext);
  const search = (event) => {
    event.preventDefault();
    fetchHeroes(value.trim().toLowerCase());
  };

  return (
    <div className="container">
      <form className="form" onSubmit={search}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="form-btn"
          >Search</button>
        </div>
      </form>
    </div>
  )
};
