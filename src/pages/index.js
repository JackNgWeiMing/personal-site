import React, { useRef, useEffect, useState } from 'react'

import Layout from '../components/layout'
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
    // selectorRef.current.style.left = `${offsetLeft}px`
  }

  return (
    <Layout>
      <div>
        <section className={Styles.hero}>
          <div>
            <span>
              <strong className={Styles.strong}>Hi my name is</strong>
            </span>
            <h1>Jack Ng </h1>
            <h2>I build things for the web </h2>
            <p>
              I'm a software engineer based in Boston, MA specializing in
              building (and occasionally designing) exceptional, high-quality
              websites and applications.
            </p>
          </div>
        </section>

        <section className={Styles.section}>
          <h3 className={Styles.sectionTitle}>
            <span className={Styles.index}> 01. </span>
            <span className={Styles.content}>About me </span>
            <hr className={Styles.divider} />
          </h3>
          <p>
            Hello! I'm Brittany, a software engineer based in Boston, MA who
            enjoys building things that live on the internet. I develop
            exceptional websites and web apps that provide intuitive,
            pixel-perfect user interfaces with efficient and modern backends.
            Shortly after graduating from
            <strong className={Styles.strong}> Northeastern University</strong>,
            I joined the engineering team at Upstatement where I work on a wide
            variety of interesting and meaningful projects on a daily basis.
            Here's a few technologies I've been working with recently:
          </p>
          <div>
            <ul className={Styles.skillList}>
              <li> Javascript (ES6+) </li>
              <li> Typescript </li>
              <li> C# </li>
              <li> ReasonML </li>
              <li> HTML </li>
              <li> CSS </li>
              <li> React </li>
              <li> React-native </li>
              <li> Android </li>
              <li> Express </li>
              <li> AWS </li>
            </ul>
          </div>
        </section>

        <section className={Styles.section}>
          <h3 className={Styles.sectionTitle}>
            <span className={Styles.index}> 02. </span>
            <span className={Styles.content}>Where i have working </span>
            <hr className={Styles.divider} />
          </h3>
          <div className={Styles.experience}>
            <ul className={Styles.experienceList}>
              <li
                className={`${Styles.experienceListItem} ${Styles.selected}`}
                onClick={handleClick(0)}
              >
                Freelance{' '}
              </li>
              <li
                className={Styles.experienceListItem}
                onClick={handleClick(0)}
              >
                {' '}
                SIA{' '}
              </li>
              <li
                ref={currentSelectedRef}
                className={Styles.experienceListItem}
                onClick={handleClick(0)}
              >
                {' '}
                SGH
              </li>
              <div
                ref={selectorRef}
                className={Styles.experienceListSelector}
              />
            </ul>
            <div className={Styles.experienceBlock}>
              <h4 className={Styles.experienceBlockTitle}>
                Mobile developer{' '}
                <strong className={Styles.strong}>
                  @Singapore General Hospital
                </strong>
              </h4>
              <span className={Styles.experienceBlockPeriod}>
                14 May 2019 - 16 May 2019
              </span>
              <p className={Styles.experienceBlockDescription}>
                <ul>
                  <li>
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </li>
                  <li>
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, TypeScript, Gatsby, React, Craft, Wordpress,
                    Prismic, and Netlify
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        <section className={Styles.section}>
          <h3 className={Styles.sectionTitle}>
            <span className={Styles.index}> 03. </span>
            <span className={Styles.content}>Thing i have built</span>
            <hr className={Styles.divider} />
          </h3>
          <ul>
            <li> Freelance </li>
            <li> Singapore Airlines </li>
            <li> Singapore General Hospital </li>
          </ul>
        </section>

        <footer>
          <div>
            <p>Contact me on</p>
            <ul>
              <li> Github </li>
              <li> LinkedIn </li>
            </ul>
          </div>
          <div>Contac</div>
        </footer>
      </div>
    </Layout>
  )
}

export default IndexPage
