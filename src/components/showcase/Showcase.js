import PropTypes from 'prop-types'
import clsx from 'clsx'

import Button from 'components/button'

import stl from './Showcase.module.scss'

const Showcase = ({
  title,
  subTitle,
  description,
  primaryBtnLabel = 'Order Now',
  secondaryBtnLabel = 'Learn More',
  imgSrc,
  isDark,
  customClass,
  textBoxClass,
}) => (
  <section
    style={{ backgroundImage: `url(${imgSrc})` }}
    className={clsx(stl.container, isDark && stl.dark, customClass)}
  >
    <div className={clsx(stl.textBox, textBoxClass)}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <p>{description}</p>

      <div className={stl.btnsRow}>
        <Button label={primaryBtnLabel} />
        <Button label={secondaryBtnLabel} />
      </div>
    </div>
  </section>
)

Showcase.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.string,
  primaryBtnLabel: PropTypes.string,
  secondaryBtnLabel: PropTypes.string,
  imgSrc: PropTypes.string,
  isDark: PropTypes.bool,
  customClass: PropTypes.string,
  textBoxClass: PropTypes.string,
}

export default Showcase
