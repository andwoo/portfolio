import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { ColorLinkA } from '../components/colorlink';
import styles from '../styles/projectTemplate.module.scss';

export default class Project extends React.PureComponent {
  RenderRepo = ({data}) => {
    return (
      <div className="column is-full">
        <ColorLinkA color="#000000" to={data}>
          <div className={`columns is-vcentered is-mobile is-gapless ${styles.repoItem}`}>
            <div className="column is-narrow">
              <span className={styles.icon}>
                <i className="fab fa-github-square"/>
              </span>
            </div>
            <div className="column">
              {data.substring(data.lastIndexOf('/') + 1)}
            </div>
          </div>
        </ColorLinkA>
      </div>
    );
  }
  
  RenderTechnology = ({data}) => {
    return (
      <div className="column is-narrow is-uppercase">
        <span className={styles.technologyItem}>{data}</span>
      </div>
    )
  }

  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;

    return (
    <Layout title={frontmatter.headerTitle} titleContent={frontmatter.title} fontawesome={true}>
      <div className={`columns ${styles.container}`}>
        <div className={`column ${styles.content}`}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className={`column is-one-quarter ${styles.side}`}>
          <div className="columns is-multiline is-mobile">
            <div className="columns is-multiline is-mobile">
              {frontmatter.technologies && frontmatter.technologies.map((data, index) => <this.RenderTechnology key={index} data={data}/>)}
            </div>
            {frontmatter.repos && <div className={`column is-full ${styles.line}`}/>}
            <div className="columns is-multiline is-mobile">
              {frontmatter.repos && frontmatter.repos.map((data, index) => <this.RenderRepo key={index} data={data}/>)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )};
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
        repos
        technologies
      }
    }
  }
`;
