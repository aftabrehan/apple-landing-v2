import Header from 'components/header'
import Hero from 'components/hero'

import stl from './Home.module.scss'

const Home = () => (
  <div className={stl.wrapper}>
    <Header />
    <Hero />
  </div>
)

export default Home
