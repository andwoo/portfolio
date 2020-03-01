import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const titleContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';

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
