import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import SEO from './seo';
import TitleContent from './title';
import Footer from './footer';
import styles from '../styles/layout.module.scss';

const Layout = ({ title, titleContent, children }) => {
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
    <div className={styles.container}>
      <SEO title={title} />
      <div className={styles.columns}>
        <Header {...data.site.siteMetadata} />
        <TitleContent titleContent={titleContent} />
        <main>{children}</main>
        <div className={styles.columnStretch} />
        <Footer {...data.site.siteMetadata} />
      </div>
    </div>
  );
};

export default Layout;
