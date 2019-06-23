import React, { useState } from 'react'
import List, { IJob } from './List'
import Styles from '../../styles/main.module.scss'

const jobs: IJob[] = [
  {
    company: 'Freelance',
    title: 'Mobile Application Developer',
    description: [
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
    ],
    period: '14 May 2019 - 16 May 2019',
  },
  {
    company: 'Freelance 2',
    title: 'Mobile Application Developer',
    description: [
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
    ],
    period: '14 May 2019 - 16 May 2019',
  },
  {
    company: 'Freelance 2',
    title: 'Mobile Application Developer',
    description: [
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
    ],
    period: '14 May 2019 - 16 May 2019',
  },
]

export default function Experience(props) {
  const [selected, setSelected] = useState(0)
  const handleChange = (i: number) => {
    setSelected(i)
  }
  const selectedJob = jobs[selected]
  return (
    <section id="experience" className={Styles.section}>
      <h3 className={Styles.sectionTitle}>
        <span className={Styles.index}> 02. </span>
        <span className={Styles.content}>Skill </span>
        <hr className={Styles.divider} />
      </h3>
      <div className={Styles.experience}>
        <List data={jobs} selected={selected} onChange={handleChange} />
        <div className={Styles.experienceBlock}>
          <h4 className={Styles.experienceBlockTitle}>
            {selectedJob.title}
            <strong className={Styles.strong}>@{jobs[selected].company}</strong>
          </h4>
          <span className={Styles.experienceBlockPeriod}>
            {selectedJob.period}
          </span>
          <div className={Styles.experienceBlockDescription}>
            <ul>
              {selectedJob.description.map(v => (
                <li>
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as JavaScript,
                  TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and
                  Netlify
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
