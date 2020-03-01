import React from 'react';
import { ColorLinkA } from './colorlink';
import headerStyles from '../styles/header.module.scss';
import styles from '../styles/footer.module.scss';

export default ({ github, linkedIn }) => {
  return (
    <footer className={styles.container}>
      <div className="columns is-gapless is-mobile is-vcentered">
        <div className="column">
          <h3 className={styles.title}>
            I like{' '}
            <span role="img" aria-label="coffee">
              ☕
            </span>{' '}
            and{' '}
            <span role="img" aria-label="pizza">
              🍕
            </span>
          </h3>
        </div>
        <div className="column has-text-right is-vcentered is-uppercase">
          <ColorLinkA className={headerStyles.link} to={github} color="#757575">Github</ColorLinkA>
          <span className={headerStyles.spacer}></span>
          <ColorLinkA className={headerStyles.link} to={linkedIn} color="#757575">LinkedIn</ColorLinkA>
        </div>
      </div>
    </footer>
  );
};
