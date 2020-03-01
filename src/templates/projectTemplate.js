import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styles from '../styles/projectTemplate.module.scss';

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout title={frontmatter.headerTitle} titleContent={frontmatter.title}>
      <div
        className={styles.container}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        headerTitle
      }
    }
  }
`;
