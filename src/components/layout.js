import React from 'react'
import Header from './header'
import SEO from './seo'
import TitleContent from '../components/title'
import styles from '../styles/layout.module.scss'

const Layout = ({ title, titleContent, children }) => {
  return (
    <div className={styles.container}>
      <Header/>
        <SEO title={title} />
        <TitleContent titleContent={titleContent}/>
        <main>{children}</main>
        <footer></footer>
    </div>
  )
}

export default Layout
