import React, { useRef, useEffect } from 'react'
import Styles from '../../styles/main.module.scss'

interface Props {
  data?: IJob[]
  selected?: number
  onChange: (i: number) => void
}

export interface IJob {
  title: string
  company: string
  range: string
  description: string[]
}

const List: React.SFC<Props> = props => {
  const { data, selected = 0 } = props
  const currentSelectedRef = useRef(null)
  const handlClick = (index: number) => () => {
    props.onChange(index)
  }

  /**
   * the highlighter id not responsive, so currently commented out
   */
  // const selectorRef = useRef(null)

  // useEffect(() => {
  //   if (currentSelectedRef.current && selectorRef.current) {
  //     const {
  //       clientHeight,
  //       clientWidth,
  //       offsetLeft,
  //       offsetTop,
  //     } = currentSelectedRef.current
  //     console.log(clientHeight, clientWidth, offsetLeft, offsetTop)

  //     selectorRef.current.style.height = `${clientHeight}px`
  //     selectorRef.current.style.width = `${clientWidth}px`
  //     selectorRef.current.style.top = `${offsetTop}px`
  //     selectorRef.current.style.left = `${offsetLeft}px`
  //   }
  // }, [selected])

  return (
    <ul className={Styles.experienceList}>
      {!data
        ? null
        : data.map((v, i) => {
            const isSelected = i === selected
            return (
              <li
                key={i}
                className={`
                  ${Styles.experienceListItem} 
                  ${isSelected ? Styles.selected : ''}`}
                ref={isSelected ? currentSelectedRef : null}
                onClick={handlClick(i)}
              >
                {v.company}
              </li>
            )
          })}
      {/* <div ref={selectorRef} className={Styles.experienceListSelector} /> */}
    </ul>
  )
}

export default List
