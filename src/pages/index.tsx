import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout, Hero, Skill, Experience } from '../components'

type Props = {
  data: {
    hero: any
    skill: any
    experience: any
  }
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Hero data={data.hero.edges} />
      <Skill data={data.skill.edges} />
      <Experience data={data.experience.edges} />
    </Layout>
  )
}

export default IndexPage

export const myQuery = graphql`
  query myQuery {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            name
            subtitle
            contactText
          }
          html
        }
      }
    }

    skill: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/skill/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            company
            range
            name
            subtitle
            contactText
            skills
          }
          html
        }
      }
    }

    experience: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            company
            range
            name
            subtitle
            contactText
            skills
          }
          html
        }
      }
    }
  }
`
