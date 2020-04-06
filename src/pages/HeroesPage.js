import React, {useContext, useEffect} from 'react';
import {map} from 'lodash-es';

// Components
import {Search} from "../components/Search/Search";
import {Heroes} from "../components/Heroes/Heroes";
import {Loading} from "../components/Loading/Loading";

// Contexts
import {HeroesContext} from "../services/heroes/heroes.context";

export const HeroesPage = () => {
  const { loading, heroes, fetchHeroes } = useContext(HeroesContext);

  useEffect(() => {
    fetchHeroes();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <Search/>
      <div className="container">
        {loading && !heroes
          ? <Loading/>
          : map(heroes, (items, key) => <Heroes key={key} data={{ type: key, items }}/>)
        }
      </div>
    </section>
  )
};
