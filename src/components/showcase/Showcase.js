import PropTypes from 'prop-types'
import clsx from 'clsx'

import Button from 'components/button'

import stl from './Showcase.module.scss'

const Showcase = ({
  title = 'MacBook Pro',
  subTitle = 'Supercharged by M2 Pro and M2 Max.',
  description = 'Available starting 1.24',
  primaryBtnLabel = 'Order Now',
  secondaryBtnLabel = 'Learn More',
  imgSrc = '/assets/png/macbook-pro.png',
  customClass,
}) => (
  <section
    style={{ backgroundImage: `url(${imgSrc})` }}
    className={clsx(stl.container, customClass)}
  >
    <h1>{title}</h1>
    <h3>{subTitle}</h3>
    <p>{description}</p>

    <div className={stl.btnsRow}>
      <Button label={primaryBtnLabel} />
      <Button label={secondaryBtnLabel} />
    </div>
  </section>
)

Showcase.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  primaryBtnLabel: PropTypes.string,
  secondaryBtnLabel: PropTypes.string,
  imgSrc: PropTypes.string,
  customClass: PropTypes.string,
}

export default Showcase
