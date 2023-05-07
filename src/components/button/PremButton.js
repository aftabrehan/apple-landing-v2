import PropTypes from 'prop-types'

import stl from './PremButton.module.scss'

const PremButton = ({ label }) => (
  <button className={stl.btn} data-label={label}>
    {label}
  </button>
)

PremButton.propTypes = {
  label: PropTypes.string,
}

export default PremButton
