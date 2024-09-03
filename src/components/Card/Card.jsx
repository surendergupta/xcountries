import React from 'react';

import styles from './Card.module.css';
const Card = ({country}) => {
    const { name, flag, abbr } = country;
  return (
    <div className={ styles.card } key={abbr}>
        <img src={flag} alt={abbr} />
        <h4>{name}</h4>
    </div>
  )
}

export default Card;