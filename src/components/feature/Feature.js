import Showcase from 'components/showcase'

import { useWindow } from 'lib/hooks'

import stl from './Feature.module.scss'

const mainShowcases = [
  {
    title: 'iPhone 14 Pro',
    subTitle: 'Pro. Beyond.',
    imgSrc: '/assets/png/iphone-14-pro.png',
    smallDesImgSrc: '/assets/png/iphone-14-pro-tablet.png',
    mobileImgSrc: '/assets/png/iphone-14-pro-mobile.png',
    isDark: true,
  },
  {
    title: 'iPhone 14',
    subTitle: 'Wonderfull.',
    imgSrc: '/assets/png/iphone-14.png',
    smallDesImgSrc: '/assets/png/iphone-14-tablet.png',
    mobileImgSrc: '/assets/png/iphone-14-mobile.png',
  },
  {
    title: 'iPad Pro',
    subTitle: (
      <>
        Supercharged by <span className={stl.m2}></span>
      </>
    ),
    imgSrc: '/assets/png/ipad-pro.png',
    smallDesImgSrc: '/assets/png/ipad-pro-tablet.png',
    mobileImgSrc: '/assets/png/ipad-pro-mobile.png',
    isDark: true,
    textBoxClass: stl.ipadPro,
  },
]

const Feature = () => {
  const { isSmallDes, isTablet, isMobile } = useWindow()

  return (
    <section className={stl.container}>
      {mainShowcases.map(showcase => (
        <Showcase
          key={showcase.title}
          {...showcase}
          isSmallDes={isSmallDes || isTablet}
          isMobile={isMobile}
        />
      ))}
    </section>
  )
}

export default Feature
