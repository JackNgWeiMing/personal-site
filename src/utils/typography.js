import Typography from 'typography'
import oceanTheme from 'typography-theme-ocean-beach'

oceanTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    textShadow: 'none', // eslint-disable-line
    textDecoration: 'underlined',
  },
  'h2,h3': {
    marginBottom: rhythm(1 / 2),
    marginTop: rhythm(2),
  },
})

const typography = new Typography(oceanTheme)

export default typography
