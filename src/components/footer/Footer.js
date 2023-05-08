import Link from 'next/link'

import stl from './Footer.module.scss'

const Footer = () => {
  const flatLinks = [
    'Privacy Policy',
    'Terms of Use',
    'Sales and Refunds',
    'Legal',
    'Site Map',
  ]

  const shopAndLearn = [
    'Store',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'AirPods',
    'TV & Home',
    'AirTag',
    'Accessories',
    'Gift Cards',
  ]

  const services = [
    'Apple Music',
    'Apple TV+',
    'Apple Fitness+',
    'Apple News+',
    'Apple Arcade',
    'iCloud',
    'Apple One',
    'Apple Card',
    'Apple Books',
    'Apple Podcasts',
    'App Store',
  ]

  const account = ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']

  const appleStore = [
    'Find a Store',
    'Genius Bar',
    'Today at Apple',
    'Apple Camp',
    'Apple Store App',
    'Refurbished and Clearance',
    'Financing',
    'Apple Trade In',
    'Order Status',
    'Shopping Help',
  ]

  const forBusiness = ['Apple and Business', 'Shop for Business']

  const forEducation = [
    'Apple and Education',
    'Shop for K-12',
    'Shop for College',
  ]

  const forHealthCare = [
    'Apple in Healthcare',
    'Health on Apple Watch',
    'Health Records on iPhone',
  ]

  const forGovernment = [
    'Shop for Government',
    'Shop for Veterans and Military',
  ]

  const appleValues = [
    'Accessibility',
    'Education',
    'Environment',
    'Inclusion and Diversity',
    'Privacy',
    'Racial Equity and Justice',
    'Supplier Responsibility',
  ]

  const aboutApple = [
    'Newsroom',
    'Apple Leadership',
    'Career Opportunities',
    'Investors',
    'Ethics & Compliance',
    'Events',
    'Contact Apple',
  ]

  return (
    <footer className={stl.footer}>
      <div className={stl.content}>
        <div className={stl.descriptionWrapper}>
          <p>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings &gt;
            General &gt; Software Update. Tap Download and Install.
          </p>
          <p>Available for qualifying applicants in the United States.</p>
          <p>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch.
          </p>
          <p>
            Learn more about how Apple Card applications are evaluated at
            support.apple.com/kb/HT209218.
          </p>
          <div className={stl.divider} />
        </div>

        <div className={stl.linksWrapper}>
          <div className={stl.linksContainer}>
            <div className={stl.linksBox}>
              <h5>Shop and Learn</h5>

              {shopAndLearn.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className={stl.linksContainer}>
            <div className={stl.linksBox}>
              <h5>Services</h5>

              {services.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>

            <div className={stl.linksBox}>
              <h5>Account</h5>

              {account.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className={stl.linksContainer}>
            <div className={stl.linksBox}>
              <h5>Apple Store</h5>

              {appleStore.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className={stl.linksContainer}>
            <div className={stl.linksBox}>
              <h5>For Business</h5>

              {forBusiness.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>

            <div className={stl.linksBox}>
              <h5>For Education</h5>

              {forEducation.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>

            <div className={stl.linksBox}>
              <h5>For Healthcare</h5>

              {forHealthCare.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>

            <div className={stl.linksBox}>
              <h5>For Government</h5>

              {forHealthCare.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className={stl.linksContainer}>
            <div className={stl.linksBox}>
              <h5>Apple Values</h5>

              {appleValues.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>

            <div className={stl.linksBox}>
              <h5>About Apple</h5>

              {aboutApple.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={stl.infoWrapper}>
          <p>
            More ways to shop: <Link href="/">Find an Apple Store</Link> or
            other
            <Link href="/">retailer</Link> near you. Or call 1-800-MY-APPLE.
          </p>
          <div className={stl.divider} />
          <div className={stl.bottomLine}>
            <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
            <div className={stl.flatLinks}>
              {flatLinks.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>
            <p>United States</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
