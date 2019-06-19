import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import _ from 'lodash'
import { StaticQuery, graphql } from 'gatsby'

import Icon from '../images/gatsby-icon.png'
import Styles from '../styles/main.module.scss'

const Header = ({}) => {
  const [offset, setOffset] = useState(0)
  const [scrollingDirection, setDirection] = useState(false)
  const [headerVisibility, setHeaderVisibility] = useState(true)

  const handleScroll = _.throttle(ev => {
    const threshold = 100.0
    const { pageYOffset: currentOffset } = window
    const diff = currentOffset - offset
    const passThreshold = diff / 100
    const isScrollDown = diff > 0
    const shouldChange = headerVisibility != !isScrollDown

    setDirection(isScrollDown)

    if (passThreshold > 1 || passThreshold < -1) {
      setOffset(currentOffset)
      setHeaderVisibility(isScrollDown)
    }
  }, 200)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <header
      className={`${Styles.header} ${
        scrollingDirection ? Styles.headerHide : Styles.headerActive
      }`}
    >
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
            <button>My Resume</button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
