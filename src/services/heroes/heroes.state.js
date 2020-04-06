import React, {useReducer} from 'react';
import axios from 'axios';

// Reducer
import {heroesReducer} from './heroes.reducer';

// Context
import {HeroesContext} from './heroes.context';

// Consts
import {FETCH_HEROES, GET_HERO, LOADING} from '../types';

export const HeroesState = ({children}) => {
  const [state, dispatch] = useReducer(heroesReducer, []);
  const { heroes, hero, loading } = state;

  const fetchHeroes = async (term) => {
    setLoading();
    const response = await axios.get('https://api.opendota.com/api/heroStats');
    const data = response.data;

    dispatch({
      type: FETCH_HEROES,
      payload: term ? { term, data } : { data },
    });
  };

  const getHeroDetails = async (name) => {
    setLoading();
    const response = await axios.get('https://api.opendota.com/api/heroStats');
    const data = response.data;

    dispatch({
      type: GET_HERO,
      payload: { name, data },
    });
  };

  const setLoading = () => dispatch({type: LOADING});

  return (
    <HeroesContext.Provider value={{
      fetchHeroes,
      setLoading,
      getHeroDetails,
      heroes,
      hero,
      loading,
    }}>
      {children}
    </HeroesContext.Provider>
  )
};
