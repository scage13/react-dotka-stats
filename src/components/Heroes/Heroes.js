import React from 'react';
import {Link} from 'react-router-dom';
import './Heroes.sass';

const icon = {
  strength: 'http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_str.png',
  intellect: 'http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_int.png',
  agility: 'http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_agi.png',
};

export const Heroes = ({data}) => {
  return (
    <div className={`heroes ${data.type}`}>
      <div className="heroes-header">
        <img src={icon[data.type]} alt={data.type}/>
        <h4>{data.type}</h4>
      </div>
      <div className="heroes-list">
        {data.items.map(hero => (
          <div className="heroes-item" key={hero.id}>
            <Link to={`/${hero.name}`} className="heroes-item__img">
              <img
                src={`http://cdn.dota2.com${hero.img}`}
                title={hero.localized_name}
                alt={hero.localized_name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
