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
  period: string
  description: string[]
}

const List: React.SFC<Props> = props => {
  const { data, selected } = props
  const selectorRef = useRef(null)
  const currentSelectedRef = useRef(null)
  const handlClick = (index: number) => () => {
    props.onChange(index)
  }

  useEffect(() => {
    if (currentSelectedRef.current && selectorRef.current) {
      const {
        clientHeight,
        clientWidth,
        offsetLeft,
        offsetTop,
      } = currentSelectedRef.current
      selectorRef.current.style.height = `${clientHeight}px`
      selectorRef.current.style.width = `${clientWidth}px`
      selectorRef.current.style.top = `${offsetTop}px`
      selectorRef.current.style.left = `${offsetLeft}px`
    }
  }, [selected])

  return (
    <ul className={Styles.experienceList}>
      {!data
        ? null
        : data.map((v, i) => {
            const isSelected = i === selected
            return (
              <li
                className={`
              ${Styles.experienceListItem} 
              ${isSelected ? Styles.selected : ''}`}
                ref={isSelected ? currentSelectedRef : null}
                onClick={handlClick(i)}
              >
                {v.title}
              </li>
            )
          })}
      <div ref={selectorRef} className={Styles.experienceListSelector} />
    </ul>
  )
}

export default List