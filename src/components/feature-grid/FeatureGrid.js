import Showcase from 'components/showcase'

import stl from './FeatureGrid.module.scss'

const mainShowcases = [
  {
    title: 'Creativity and community.',
    subTitle: 'Woven together.',
    description: 'Explore the new Black Unity watch band and matching face.',
    imgSrc: '/assets/png/community.png',
  },
  {
    title: 'WATCH',
    description: 'A healthy leap ahead.',
    imgSrc: '/assets/png/watch.png',
  },
  {
    title: 'iPhone 14 Pro',
    description: 'Pro. Beyond.',
    imgSrc: '/assets/png/iphone.png',
  },
  {
    title: 'iPhone 14',
    description: 'Big and bigger.',
    imgSrc: '/assets/png/iphones.png',
    customClass: stl.textBlack,
  },
  {
    title: 'A gift for every wish.',
    description: 'Find something for everyone this Lunar New Year.',
    imgSrc: '/assets/png/gift.png',
    customClass: stl.whiteDesc,
  },
  {
    title: 'Card',
    description: 'Get up to 3% Daily Cash back with every purchase.',
    imgSrc: '/assets/png/card.png',
    customClass: stl.textBlack,
  },
]

const FeatureGrid = () => {
  return (
    <section className={stl.container}>
      {mainShowcases.map(showcase => (
        <Showcase key={showcase.title} {...showcase} />
      ))}
    </section>
  )
}

export default FeatureGrid
