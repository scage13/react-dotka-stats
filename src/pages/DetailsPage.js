import React, {useContext, useEffect} from 'react';
import {HeroesContext} from "../services/heroes/heroes.context";
import {Loading} from "../components/Loading/Loading";
import {Details} from "../components/Details/Details";

export const DetailsPage = ({ match }) => {
  // const name = match.params.name;
  const {getHeroDetails, hero, loading} = useContext(HeroesContext);

  useEffect(() => {
    getHeroDetails(match.params.name);
    // eslint-disable-next-line
  }, []);

  return (
    <section className="container">
      {loading && !hero
          ? <Loading/>
          : <Details hero={hero}/>
      }
    </section>
  );
};
