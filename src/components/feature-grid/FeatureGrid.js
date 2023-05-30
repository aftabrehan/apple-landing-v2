import Showcase from 'components/showcase'

import { useWindow } from 'lib/hooks'

import stl from './FeatureGrid.module.scss'

const mainShowcases = [
  {
    title: (
      <>
        <span className={stl.appleDarkLogo} />
        Trade In
      </>
    ),
    description: "Upgrade and save. It's that easy",
    imgSrc: '/assets/png/trade-in.png',
    mobileImgSrc: '/assets/png/trade-in-mobile.png',
    customBtns: ['See what your device is worth'],
  },
  {
    title: (
      <>
        <span className={stl.appleLightLogo} />
        WWDC23
      </>
    ),
    description: 'Watch online June 5 at 10:00 a.m. PT.',
    imgSrc: '/assets/png/apple-conference.png',
    mobileImgSrc: '/assets/png/apple-conference-mobile.png',
    isDark: true,
    textBoxClass: stl.conference,
    customBtns: ['Learn More'],
  },
  {
    title: (
      <>
        <span className={stl.appleDarkLogo} />
        Watch
      </>
    ),
    description: 'Pride is in the air.',
    imgSrc: '/assets/png/watch.png',
    mobileImgSrc: '/assets/png/watch-mobile.png',
    customBtns: ['Shop the new Pride Edition Sport Brand'],
  },
  {
    title: 'Macbook Pro',
    description: 'Supercharged by M2 Pro and M2 Pro Max.',
    imgSrc: '/assets/png/macbook-pro.png',
    isDark: true,
  },
  {
    title: 'HomePod',
    description: 'Profound sound.',
    imgSrc: '/assets/png/homepod.png',
    isDark: true,
  },
  {
    title: (
      <>
        <span className={stl.appleDarkLogo} />
        Card
      </>
    ),
    description: (
      <>
        Get up to 3% Daily Cash back
        <br /> with every purchase.
      </>
    ),
    imgSrc: '/assets/png/card.png',
    customBtns: ['Learn More', 'Apply Now'],
  },
]

const FeatureGrid = () => {
  const { isSmallDes, isTablet, isMobile } = useWindow()

  return (
    <section className={stl.container}>
      {mainShowcases.map((showcase, i) => (
        <Showcase
          key={i}
          {...showcase}
          isSmall
          isSmallDes={isSmallDes || isTablet}
          isMobile={isMobile}
        />
      ))}
    </section>
  )
}

export default FeatureGrid
