import { PremButton } from 'components/button'

import stl from './Hero.module.scss'

const Hero = () => (
  <section className={stl.container}>
    <h1>
      Introducing the new
      <br />
      MacBook Pro and Mac mini.
    </h1>
    <PremButton label="Watch the announcement" />
  </section>
)

export default Hero
