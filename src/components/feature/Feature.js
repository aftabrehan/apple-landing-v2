import Showcase from 'components/showcase'

import stl from './Feature.module.scss'

const mainShowcases = [
  {
    title: 'iPhone 14 Pro',
    subTitle: 'Pro. Beyond.',
    imgSrc: '/assets/png/iphone-14-pro.png',
    isDark: true,
  },
  {
    title: 'iPhone 14',
    subTitle: 'Wonderfull.',
    imgSrc: '/assets/png/iphone-14.png',
  },
  {
    title: 'iPad Pro',
    subTitle: (
      <>
        Supercharged by <span className={stl.m2}></span>
      </>
    ),
    imgSrc: '/assets/png/ipad-pro.png',
    isDark: true,
    textBoxClass: stl.ipadPro,
  },
]

const Feature = () => {
  return (
    <section className={stl.container}>
      {mainShowcases.map(showcase => (
        <Showcase key={showcase.title} {...showcase} />
      ))}
    </section>
  )
}

export default Feature
