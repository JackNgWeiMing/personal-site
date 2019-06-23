import * as React from 'react'
import Styles from '../../styles/main.module.scss'

interface Props {}

const Hero: React.SFC<Props> = props => {
  return (
    <section id="about" className={Styles.hero}>
      <div>
        <span>
          <strong className={Styles.strong}>Hi my name is</strong>
        </span>
        <h1>Jack Ng</h1>
        <h2>React & React Native Developer</h2>
        <p>
          I'm a software web developer Singapore speicalized in front end
          development in Singapore. <br /> React, React Native, Typescript are
          my best friends. I work with them to all the time.
        </p>
      </div>
    </section>
  )
}

export default Hero
