import React, { useEffect, useState } from 'react'
import _ from 'lodash'

// import Icon from '../images/gatsby-icon.png'
import Icon from '../images/logo.svg'
import Styles from '../styles/main.module.scss'

const data = [
  {
    title: 'About me',
    path: '',
  },
  {
    title: 'Experience',
    path: '',
  },
]

interface Props {
  handleDrawer: () => void
  openDrawer: boolean
}

type Direction = 'down' | 'up'
const Header: React.FC<Props> = ({ handleDrawer, openDrawer }) => {
  const [offset, setOffset] = useState(0)
  const [scrollingDirection, setDirection] = useState<Direction>('up')

  const handleScroll = _.throttle(_ => {
    const threshold = 100.0
    const { pageYOffset: currentOffset } = window
    const diff = currentOffset - offset
    const passThreshold = diff / threshold
    const isScrollDown = diff > 0 ? 'down' : 'up'

    setDirection(isScrollDown)

    if (passThreshold > 1 || passThreshold < -1) {
      setOffset(currentOffset)
    }
  }, 200)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <header>
      <div
        className={`
        ${Styles.header} 
        ${
          scrollingDirection == 'down' ? Styles.headerHide : Styles.headerActive
        }
       `}
      >
        <div className={Styles.nav}>
          <div className={Styles.navIcon}>
            <Icon />
          </div>

          <div className={Styles.navGrow} />

          <div className={`${Styles.navList}`}>
            <ul>
              {data.map((v, i) => (
                <li>
                  <span className={Styles.index}>0{i + 1}.</span>
                  <a href={v.path} className={Styles.content}>
                    {v.title}
                  </a>
                </li>
              ))}
              <li>
                <button className={Styles.button}>My Resume</button>
              </li>
            </ul>
          </div>

          <div className={`${Styles.drawer} ${openDrawer ? Styles.hide : ''}`}>
            <ul>
              {data.map((v, i) => (
                <li key={v.title}>
                  <a>
                    <span className={Styles.index}>0{i + 1}.</span>
                    <span className={Styles.content}>{v.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`
            ${Styles.navHambuger}
            ${openDrawer && Styles.navHambugerActive}
          `}
            onClick={handleDrawer}
          >
            <div className={Styles.navHambugerTop} />
            <div className={Styles.navHambugerMiddle} />
            <div className={Styles.navHambugerBottom} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
