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
      <Header {...data.site.siteMetadata} />
      <SEO title={title} />
      <TitleContent titleContent={titleContent} />
      <main className={styles.main}>{children}</main>
      <Footer {...data.site.siteMetadata} />
    </div>
  );
};

export default Layout;
