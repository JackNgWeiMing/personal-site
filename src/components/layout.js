import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Styles from '../styles/main.module.scss'
import { StaticQuery, graphql } from 'gatsby'
import Icon from '../images/gatsby-icon.png'

const Layout = ({ children }) => (
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
              content: 'Static site built with Gatsbyjs, ReasonML, and React.',
            },
            { name: 'keywords', content: 'reasonml, bucklescript, react' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <header>
          <div className={Styles.nav}>
            <div className={Styles.navIcon}>
              <img src={Icon} />
            </div>
            <div className={Styles.navGrow} />
            <ul className={Styles.navList}>
              <li>
                <span className={Styles.index}>01.</span>
                <a href="/" className={Styles.content}>
                  hasdf
                </a>
              </li>
              <li>
                <span className={Styles.index}>02.</span>
                <a href="/" className={Styles.content}>
                  this is a link
                </a>
              </li>
              <li>
                {/* <span className={Styles.index}>02.</span>
                <a href="/" className={Styles.content}>
                  this is a link
                </a> */}
                <button>My Resume</button>
              </li>
            </ul>
          </div>
        </header>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 700,
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
