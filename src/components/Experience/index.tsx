import React, { useState } from 'react'
import List, { IJob } from './List'
import Styles from '../../styles/main.module.scss'
import { ScrollReveal } from '../'
import { MarkdownNode } from '../../types'

interface Props {
  data: MarkdownNode[]
}

// const jobs: IJob[] = [
//   {
//     company: 'Freelance',
//     title: 'Mobile Application Developer',
//     description: [
//       'Write modern, performant, maintainable code for a diverse array of client and internal projects',
//       'Write modern, performant, maintainable code for a diverse array of client and internal projects',
//     ],
//     period: '14 May 2019 - 16 May 2019',
//   },
//   {
//     company: 'Freelance 2',
//     title: 'Mobile Application Developer',
//     description: [
//       'Write modern, performant, maintainable code for a diverse array of client and internal projects',
//       'Write modern, performant, maintainable code for a diverse array of client and internal projects',
//       'Write modern, performant, maintainable code for a diverse array of client and internal projects',
//     ],
//     period: '14 May 2019 - 16 May 2019',
//   },
//   {
//     company: 'Freelance 2',
//     title: 'Mobile Application Developer',
//     description: [
//       'Write modern, performant, maintainable code for a diverse array of client and internal projects',
//       'Write modern, performant, maintainable code for a diverse array of client and internal projects',
//       'Write modern, performant, maintainable code for a diverse array of client and internal projects',
//       'Write modern, performant, maintainable code for a diverse array of client and internal projects',
//     ],
//     period: '14 May 2019 - 16 May 2019',
//   },
// ]

const Experience: React.FC<Props> = props => {
  const [selected, setSelected] = useState(0)
  const {} = props.data
  const handleChange = (i: number) => {
    setSelected(i)
  }
  const { frontmatter, html } = props.data[selected].node
  const jobs = props.data.map((v, i) => {
    return v.node.frontmatter
  })
  return (
    <ScrollReveal>
      <section id="experience" className={Styles.section}>
        <h3 className={Styles.sectionTitle}>
          <span className={Styles.index}> 02. </span>
          <span className={Styles.content}>Experience</span>
          <hr className={Styles.divider} />
        </h3>
        <div className={Styles.experience}>
          <List data={jobs} selected={selected} onChange={handleChange} />
          <div className={Styles.experienceBlock}>
            <h4>
              <strong className={Styles.strong}>@{frontmatter.company}</strong>
            </h4>
            <h4 className={Styles.experienceBlockTitle}>{frontmatter.title}</h4>
            <h4 className={Styles.experienceBlockPeriod}>
              {frontmatter.range}
            </h4>
            <div
              className={Styles.experienceBlockDescription}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

export default Experience
