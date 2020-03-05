import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export default ({ name, className, objectFit }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          childImageSharp: { internal: { type: { eq: "ImageSharp" } } }
        }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
          relativePath
        }
      }
    }
  `);

  const result = data.allFile.nodes.find(element => {
    // console.log(name);
    // console.dir(element);
    // if(element.relativePath !== name) {
    //   console.log(`${element.relativePath} == ${name}`);
    // }
    return element.relativePath === name;
  });
  if(!result) {
    console.log(name);
  }
  // console.dir(result);

  return (
    <Img
      fluid={result.childImageSharp.fluid}
      className={className}
      objectFit={objectFit}
    />
  );
};
