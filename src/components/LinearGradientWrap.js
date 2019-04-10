import { cloneElement } from 'react'

const LinearGradientWrap = ({ children, colors = [], deg = 90 }) => {
  const division = 100 / (colors.length - 1)
  const distributeColor = (color, index) => `${color} ${index * division}%`
  const colorsString = [`${deg}deg`, ...colors.map(distributeColor)]
  const styles = {
    ...children.props.style,
    backgroundImage: `linear-gradient(${colorsString.join(', ')})`,
  }
  return cloneElement(children, { ...children.props, style: styles })
}

export default LinearGradientWrap
