import React from 'react';
import { ColorLink, ColorLinkA } from './colorlink';
import styles from '../styles/header.module.scss';

export default ({ headerTitle, github, linkedIn }) => {
  return (
    <header className={styles.container}>
      <div className="columns is-gapless is-mobile is-vcentered">
        <div className="column">
          <ColorLink className={styles.title} to="/" color="#757575">{headerTitle}</ColorLink>
        </div>
        <div className="column has-text-right is-vcentered is-uppercase">
          <ColorLinkA className={styles.link} to={github} color="#757575">Github</ColorLinkA>
          <span className={styles.spacer}></span>
          <ColorLinkA className={styles.link} to={linkedIn} color="#757575">LinkedIn</ColorLinkA>
        </div>
      </div>
    </header>
  );
};
