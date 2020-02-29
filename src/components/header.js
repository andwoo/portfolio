import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styles from '../styles/header.module.scss'

export default ()  => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          headerTitle
          github
          linkedIn
        }
      }
    }
  `);

  return (
    <header className={styles.header} >
        <div className="columns is-gapless is-mobile is-vcentered">
          <div className="column">
            <Link className={styles.title} to="/">{data.site.siteMetadata.headerTitle}</Link>
          </div>
          <div className="column has-text-right is-vcentered is-uppercase">
            <a className={styles.link} href={data.site.siteMetadata.github}>Github</a>
            <span className={styles.spacer}></span>
            <a className={styles.link} href={data.site.siteMetadata.linkedIn}>LinkedIn</a>
          </div>
        </div>
    </header>
  )
}