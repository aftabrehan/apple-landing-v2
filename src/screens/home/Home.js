import Head from 'next/head'

import Header from 'components/header'
import Footer from 'components/footer'
import Feature from 'components/feature'
import FeatureGrid from 'components/feature-grid'

import stl from './Home.module.scss'

const Home = () => (
  <div className={stl.wrapper}>
    <Head>
      <title>Apple</title>
    </Head>

    <Header />
    <Feature />
    <FeatureGrid />
    <Footer />
  </div>
)

export default Home
