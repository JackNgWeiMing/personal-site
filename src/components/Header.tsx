import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import _ from 'lodash'
import Icon from '../images/logo.svg'
import Styles from '../styles/main.module.scss'

const data = [
  {
    title: 'About me',
    path: 'about',
  },
  {
    title: 'Skills',
    path: 'skill',
  },
  {
    title: 'Experience',
    path: 'experience',
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
          <Link
            smooth
            to="about"
            className={Styles.navIcon}
            onClick={openDrawer && handleDrawer}
            duration={500}
          >
            <Icon />
          </Link>

          <div className={Styles.navGrow} />

          <div className={`${Styles.navList}`}>
            <ul>
              {data.map((v, i) => (
                <li>
                  <Link smooth={true} duration={500} to={v.path}>
                    <span className={Styles.index}>0{i}.</span>
                    <span className={Styles.content}>{v.title}</span>
                  </Link>
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
                  <Link
                    onClick={handleDrawer}
                    smooth={true}
                    duration={500}
                    to={v.path}
                  >
                    <span className={Styles.index}>0{i}.</span>
                    <span className={Styles.content}>{v.title}</span>
                  </Link>
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
