import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/header.module.scss';

export default ({ headerTitle, github, linkedIn }) => {
  return (
    <header className={styles.container}>
      <div className="columns is-gapless is-mobile is-vcentered">
        <div className="column">
          <Link className={styles.title} to="/">
            {headerTitle}
          </Link>
        </div>
        <div className="column has-text-right is-vcentered is-uppercase">
          <a className={styles.link} href={github}>
            Github
          </a>
          <span className={styles.spacer}></span>
          <a className={styles.link} href={linkedIn}>
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};
