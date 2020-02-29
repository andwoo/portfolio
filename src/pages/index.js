import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styles from './index.module.scss'

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className={styles.title}>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div className={styles.imageContainer}>
        <Image />
      </div>
      {allMarkdownRemark.edges.map((data, index) => {
        return (
          <div key={index}>
            <Link to={data.node.frontmatter.path}>
              {data.node.frontmatter.title}
            </Link>
          </div>
        )
      })}
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
          }
        }
      }
    }
  }
`
export default IndexPage
