import Header from 'components/header'
import Hero from 'components/hero'
import Footer from 'components/footer'
import Feature from 'components/feature'

import stl from './Home.module.scss'

const Home = () => (
  <div className={stl.wrapper}>
    <Header />
    <Hero />
    <Feature />
    <Footer />
  </div>
)

export default Home
