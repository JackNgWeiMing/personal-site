import * as React from 'react'
import Styles from '../../styles/main.module.scss'

interface Props {}

const Skill: React.SFC<Props> = props => {
  return (
    <section id="skill" className={Styles.section}>
      <h3 className={Styles.sectionTitle}>
        <span className={Styles.index}> 01. </span>
        <span className={Styles.content}>Skill </span>
        <hr className={Styles.divider} />
      </h3>
      <p>
        Hello! I'm Jack, a software engineer based in Singapore. I develop
        exceptional modern websites and web apps. I have Shortly after
        graduating from
        <strong className={Styles.strong}>Singapore Polytehcnic</strong>, I
        joined the engineering team at Upstatement where I work on a wide
        variety of interesting and meaningful projects on a daily basis. Here's
        a few technologies I've been working with recently:
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
  )
}

export default Skill
