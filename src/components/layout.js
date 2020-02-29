import React from 'react'
import Header from './header'
import styles from '../styles/layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header/>
        <main className={styles.content}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </div>
  )
}

export default Layout
