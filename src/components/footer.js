import React from 'react';
// import { useStaticQuery, graphql, Link } from 'gatsby'
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
          <a className={headerStyles.link} href={github}>
            Github
          </a>
          <span className={headerStyles.spacer}></span>
          <a className={headerStyles.link} href={linkedIn}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
