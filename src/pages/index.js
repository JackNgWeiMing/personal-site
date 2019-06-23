import React, { useRef, useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'

import { Layout, Hero, Skill, Experience } from '../components'
import Styles from '../styles/main.module.scss'

const IndexPage = () => {
  const selectorRef = useRef(null)
  const currentSelectedRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const handleClick = i => ev => {
    const { clientHeight, clientWidth, offsetLeft, offsetTop } = ev.target
    selectorRef.current.style.height = `${clientHeight}px`
    selectorRef.current.style.width = `${clientWidth}px`
    selectorRef.current.style.top = `${offsetTop}px`
  }

  return (
    <Layout>
      <Hero />
      <Skill />
      <Experience />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
      }
    }
  }
`
