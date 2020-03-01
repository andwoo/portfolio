import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const titleContent = `I'm an Ottawa based developer with a background in game, mobile and web development. Always striving to be the best I can be; my passion is to continuously learn and deliver quality code.`;

  return (
    <Layout title="Andrew Manley" titleContent={titleContent}>
      <div className="columns is-multiline">
        {allMarkdownRemark.edges.map((data, index) => {
          return (
            <div key={index} className="column is-one-third">
              <Project {...data.node.frontmatter} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            path
            image
            backgroundColor
          }
        }
      }
    }
  }
`;
export default IndexPage;
