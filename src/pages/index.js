import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Project from '../components/project'
// import styles from '../styles/index.module.scss'

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data

  return (
    <Layout title="Portfolio">
      <div className="columns is-multiline">
        {allMarkdownRemark.edges.map((data, index) => {
          return (
            <div key={index} className="column is-one-third">
              <Project {...data.node.frontmatter}/>
            </div>
            )
          }
        )}
      </div>
    </Layout>
  )
}
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
            path
            image
          }
        }
      }
    }
  }
`
export default IndexPage
