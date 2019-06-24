import * as React from 'react'
import sr from 'scrollreveal'

const ScrollReveal: React.FC = props => {
  const ref = React.useRef(null)
  React.useEffect(() => {
    sr().reveal(ref.current, {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay: 200,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    })
  }, [ref.current])

  return <div ref={ref}>{props.children}</div>
}

export default ScrollReveal
