import * as React from 'react'
import { TransitionProps } from 'react-transition-group/Transition'
import { Transition } from 'react-transition-group'

const duration = 100

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in`,
  opacity: 0,
}

const transitionStyles = {
  entering: {
    opacity: 0,
    transform: 'translateY(-20px)',
    transition: 'all 0.25s ease-in',
  },
  entered: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: 'all 0.25s ease-in',
  },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
}

const FadeIn: React.FC<TransitionProps> = ({
  children,
  timeout,
  in: inProps,
}) => (
  <Transition in={inProps} timeout={timeout}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
)

export default FadeIn
