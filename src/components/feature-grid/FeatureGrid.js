import Showcase from 'components/showcase'

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
  },
  {
    title: (
      <>
        <span className={stl.appleLightLogo} />
        WWDC23
      </>
    ),
    description:
      'Apple Worldwide Developers Conference. Join us online June 5‑9.',
    imgSrc: '/assets/png/conference.png',
    isDark: true,
    textBoxClass: stl.conference,
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
  },
  {
    title: 'Macbook Pro',
    description: 'Supercharged by M2 Pro and M2 Pro Max.',
    imgSrc: '/assets/png/macbook-pro.png',
    isDark: true,
  },
  {
    title: (
      <>
        Your health data.
        <br /> In your control.
      </>
    ),
    description: 'Privacy. That’s iPhone.',
    imgSrc: '/assets/png/privacy-control.png',
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
  },
]

const FeatureGrid = () => {
  return (
    <section className={stl.container}>
      {mainShowcases.map((showcase, i) => (
        <Showcase key={i} {...showcase} isSmall />
      ))}
    </section>
  )
}

export default FeatureGrid
