import Showcase from 'components/showcase'

import stl from './Feature.module.scss'

const mainShowcases = [
  {
    title: 'MacBook Pro',
    subTitle: 'Supercharged by M2 Pro and M2 Max.',
    description: 'Available starting 1.24',
    imgSrc: '/assets/png/macbook-pro.png',
  },
  {
    title: 'Mac mini',
    subTitle: 'Supercharged by M2 Pro and M2 Max.',
    description: 'Available starting 1.24',
    imgSrc: '/assets/png/mac-mini.png',
  },
  {
    title: 'HomePod',
    subTitle: 'Profound sound.',
    description: 'Available starting 2.3',
    imgSrc: '/assets/png/homepod.png',
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
