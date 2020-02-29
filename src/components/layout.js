import React from 'react'
import Header from './header'
import SEO from './seo'
import styles from '../styles/layout.module.scss'

const Layout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Header/>
        <SEO title={title} />
        <main>{children}</main>
        <footer></footer>
    </div>
  )
}

export default Layout
