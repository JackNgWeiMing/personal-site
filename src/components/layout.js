import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import _ from 'lodash'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Icon from '../images/gatsby-icon.png'
import Styles from '../styles/main.module.scss'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content:
                  'Static site built with Gatsbyjs, ReasonML, and React.',
              },
              { name: 'keywords', content: 'reasonml, bucklescript, react' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 1000,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
              fontFamily:
                '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
            }}
          >
            {children}
            <footer>
              <div>my footer</div>
            </footer>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
