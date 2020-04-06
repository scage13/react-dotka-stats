import {find} from 'lodash-es';
import {FETCH_HEROES, GET_HERO, LOADING} from "../types";

const handlers = {
  [FETCH_HEROES]: (state, {payload}) => ({...state, heroes: remapHeroes(payload), loading: false}),
  [GET_HERO]: (state, {payload}) => ({...state, hero: getHero(payload), loading: false}),
  [LOADING]: state => ({...state, loading: true}),
  DEFAULT: state => state,
};

const remapHeroes = ({data, term}) => {
  // agi str int - primary_attr, localized_name
  let heroes = data;
  if (term) {
    heroes = heroes.filter(hero => {
      return hero.localized_name.toLowerCase().includes(term);
    });
  }

  return  {
    strength: heroes.filter(hero => hero.primary_attr === 'str'),
    intellect: heroes.filter(hero => hero.primary_attr === 'int'),
    agility: heroes.filter(hero => hero.primary_attr === 'agi'),
  };
};

const getHero = ({ name, data }) => find(data, { name });

export const heroesReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};