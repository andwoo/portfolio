import React from 'react'
import styles from '../styles/title.module.scss'

export default ({titleContent}) => {

  return (
    <section className={styles.container}>
      <div className="columns is-gapless is-vcentered">
        <div className="column is-half">
          <h2>{titleContent}</h2>
        </div>
      </div>
    </section>
  );
}