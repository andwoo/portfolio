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
      <div className="columns is-gapless is-mobile is-multiline">
        <div className="column is-full">
          <Header {...data.site.siteMetadata} />
        </div>
        <div className="column is-full">
          <TitleContent titleContent={titleContent} />
        </div>
        <div className="column is-full">
          <main>{children}</main>
        </div>
        <div className="column is-full">
          <Footer {...data.site.siteMetadata} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
