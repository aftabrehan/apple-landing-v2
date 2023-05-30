import PropTypes from 'prop-types'
import clsx from 'clsx'

import AngleForward from 'assets/svg/angle-forward.svg'

import stl from './Button.module.scss'

const Button = ({ label, onClick, customClass }) => (
  <button onClick={onClick} className={clsx(stl.btn, customClass)}>
    {label} <AngleForward />
  </button>
)

Button.defaultProps = {
  label: 'Button',
  onClick: () => console.log('clicked!'),
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  customClass: PropTypes.string,
}

export default Button
