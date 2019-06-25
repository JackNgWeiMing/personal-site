import * as React from 'react'
import Styles from '../../styles/main.module.scss'
import { ScrollReveal } from '../../components'
import { MarkdownNode } from '../../types'

interface Props {
  data: MarkdownNode[]
}

const Skill: React.SFC<Props> = ({ data }) => {
  const { frontmatter, html } = data[0].node
  console.log(data)

  return (
    <ScrollReveal>
      <section id="skill" className={Styles.section}>
        <h3 className={Styles.sectionTitle}>
          <span className={Styles.index}> 01. </span>
          <span className={Styles.content}>Skill </span>
          <hr className={Styles.divider} />
        </h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div>
          <ul className={Styles.skillList}>
            {frontmatter.skills.map((v, i) => {
              return <li key={v}>{v}</li>
            })}
            <li>
              <strong className={Styles.strong}>Read more</strong>
            </li>
          </ul>
        </div>
      </section>
    </ScrollReveal>
  )
}

export default Skill
