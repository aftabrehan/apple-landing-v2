import Showcase from 'components/showcase'

import stl from './FeatureGrid.module.scss'

const mainShowcases = [
  {
    title: '<>Trade In',
    description: "Upgrade and save. It's that easy",
    imgSrc: '/assets/png/trade-in.png',
  },
  {
    title: 'WWDC23',
    description:
      'Apple Worldwide Developers Conference. Join us online June 5‑9.',
    imgSrc: '/assets/png/conference.png',
    isDark: true,
    textBoxClass: stl.conference,
  },
  {
    title: '<>Watch',
    description: 'Pride is in the air.',
    imgSrc: '/assets/png/watch.png',
  },
  {
    title: '<>Card',
    description: 'Get up to 3% Daily Cash back with every purchase.',
    imgSrc: '/assets/png/card.png',
  },
  {
    title: 'Your health data. In your control.',
    description: 'Privacy. That’s iPhone.',
    imgSrc: '/assets/png/privacy-control.png',
    isDark: true,
  },
  {
    title: 'Macbook Pro',
    description: 'Supercharged by M2 Pro and M2 Pro Max.',
    imgSrc: '/assets/png/macbook-pro.png',
    isDark: true,
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
