import * as React from 'react'
import Styles from '../../styles/main.module.scss'
import { FadeIn } from '../../components'

interface Props {}

const Hero: React.SFC<Props> = props => {
  const [isMounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    const cancenlListner = setTimeout(() => {
      setMounted(true)
    }, 1000)

    return () => clearTimeout(cancenlListner)
  })

  const one = (
    <span>
      <strong className={Styles.strong}>Hi my name is</strong>
    </span>
  )

  const two = <h1>Jack Ng</h1>
  const three = <h2>React & React Native Developer</h2>
  const four = (
    <p>
      I'm a software web developer Singapore speicalized in front end
      development in Singapore. <br /> React, React Native, Typescript are my
      best friends. I work with them to all the time.
    </p>
  )

  const items = [one, two, three, four]
  return (
    <section id="about" className={Styles.hero}>
      {items.map((v, i) => {
        return (
          <FadeIn key={i} in={isMounted} timeout={i * 50}>
            {v}
          </FadeIn>
        )
      })}
    </section>
  )
}

export default Hero
