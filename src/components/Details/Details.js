import {chain, filter, map} from "lodash-es";
import React from 'react';
import './Details.sass';

const icon = {
  str: 'http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_str.png',
  int: 'http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_int.png',
  agi: 'http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_agi.png',
};

export const Details = ({ hero }) => {
  if (!hero) { return null; }
  const getStats = prop => {
    return chain(hero, { map, filter })
      .map((value, key) => key.includes(prop) ? { key: key.replace(prop, '').replace('_', ' '), value } : null)
      .filter(item => item)
      .value()
  };

  return (
    <div className="details">
      <div className="details-header">
        <div className="details-header__img">
          <img src={`http://cdn.dota2.com${hero.img}`} alt=""/>
        </div>
        <div className="details-header__details">
          <h1 className="details-header__name">
            <img src={icon[`${hero.primary_attr}`]} alt=""/>
            {hero.localized_name}
          </h1>
          <div className="details-header__other">
            Attack type: <i> {hero.attack_type}</i>
            <ul>
              Roles:&nbsp;
              { hero.roles.map(role => (<li key={role}><i>{role}</i></li>)) }
            </ul>
          </div>
        </div>
      </div>

      <div className="details-base">
        <h2 className="details-base__title">Base Stats</h2>
        { map(getStats('base_'), ({value, key}) => (
          <div className="details-base__item" key={key}><b>{key}:</b> {value}</div>
        ))
        }
      </div>
    </div>
  );
};
