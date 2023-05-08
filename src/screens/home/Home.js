import Header from 'components/header'
import Hero from 'components/hero'
import Footer from 'components/footer'

import stl from './Home.module.scss'

const Home = () => (
  <div className={stl.wrapper}>
    <Header />
    <Hero />
    <Footer />
  </div>
)

export default Home
