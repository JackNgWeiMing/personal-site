import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import '../assets/styles/main.css';
import '../assets/styles/normalize.css';
import { ContentContext } from '../content/ContentContext';
import { DataType } from '../content/DataType';

export default ({ data }: PageProps<DataType>) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jack - React, Software Engineer</title>
        <html lang="en" />
        <meta name="description" content="Portfolio" />
      </Helmet>
      <ContentContext.Provider value={data}>
        <App />
      </ContentContext.Provider>
    </>
  );
};

export const query = graphql`
  query myQuery {
    reading: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/reading/" } }
      sort: { fields: [frontmatter___ranking, frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            ranking
          }
        }
      }
    }
    skill: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/skill/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
    experience: allMarkdownRemark(
      sort: { fields: [frontmatter___sequence], order: DESC }
      filter: { fileAbsolutePath: { regex: "/experience/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            company
            start
            duration
            sequence
          }
          html
        }
      }
    }
  }
`;
