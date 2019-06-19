import React from 'react'

import Layout from '../components/layout'
import Styles from '../styles/main.module.scss'

const IndexPage = () => (
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
            I'm a software engineer based in Boston, MA specializing in building
            (and occasionally designing) exceptional, high-quality websites and
            applications.
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
          <strong className={Styles.strong}> Northeastern University</strong>, I
          joined the engineering team at Upstatement where I work on a wide
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
        <ul>
          <li> Freelance </li>
          <li> Singapore Airlines </li>
          <li> Singapore General Hospital </li>
        </ul>
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

export default IndexPage
