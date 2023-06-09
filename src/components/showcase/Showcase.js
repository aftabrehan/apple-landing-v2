import PropTypes from 'prop-types'
import clsx from 'clsx'

import Button from 'components/button'

import stl from './Showcase.module.scss'

const Showcase = ({
  title,
  subTitle,
  description,
  primaryBtnLabel = 'Learn More',
  secondaryBtnLabel = 'Buy',
  imgSrc,
  smallDesImgSrc,
  mobileImgSrc,
  isDark,
  isSmall,
  isSmallDes,
  isMobile,
  customBtns = [],
  customClass,
  textBoxClass,
}) => (
  <section
    style={{
      backgroundImage: `url(${
        (isSmallDes && (smallDesImgSrc || imgSrc)) ||
        (isMobile && (mobileImgSrc || imgSrc)) ||
        imgSrc
      })`,
    }}
    className={clsx(
      stl.container,
      isDark && stl.dark,
      isSmall && stl.small,
      customClass
    )}
  >
    <div className={clsx(stl.textBox, textBoxClass)}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <p>{description}</p>

      <div className={stl.btnsRow}>
        {customBtns.length ? (
          customBtns.map(label => <Button key={label} label={label} />)
        ) : (
          <>
            <Button label={primaryBtnLabel} />
            <Button label={secondaryBtnLabel} />
          </>
        )}
      </div>
    </div>
  </section>
)

Showcase.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  primaryBtnLabel: PropTypes.string,
  secondaryBtnLabel: PropTypes.string,
  imgSrc: PropTypes.string,
  smallDesImgSrc: PropTypes.string,
  isDark: PropTypes.bool,
  isSmall: PropTypes.bool,
  isSmallDes: PropTypes.bool,
  isMobile: PropTypes.bool,
  customBtns: PropTypes.array,
  customClass: PropTypes.string,
  textBoxClass: PropTypes.string,
}

export default Showcase
