import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const { allMarkdownRemark } = data;

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {allMarkdownRemark.edges.map((data, index) => {
        return (
          <div key={index}>
            <Link to={data.node.frontmatter.path}>{data.node.frontmatter.title}</Link>
          </div>
        );
      })}
    </Layout>
  );
}
export const pageQuery = graphql`
{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {type: {eq: "project"}}}) {
    edges {
      node {
        frontmatter {
          title
          path
        }
      }
    }
  }
}
`
export default IndexPage
