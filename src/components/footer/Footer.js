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

  const appleWallet = ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']

  const account = ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']

  const entertainment = [
    'Apple One',
    'Apple TV+',
    'Apple Music',
    'Apple Arcade',
    'Apple Fitness+',
    'Apple News+',
    'Apple Podcasts',
    'Apple Books',
    'App Store',
  ]

  const appleStore = [
    'Find a Store',
    'Genius Bar',
    'Today at Apple',
    'Apple Camp',
    'Apple Store App',
    'Certified Refurbished',
    'Apple Trade In',
    'Financing',
    'Carrier Deals at Apple',
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
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least 18 years old to be
            eligible to trade in for credit or for an Apple Gift Card. Trade-in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In-store trade-in requires presentation of a valid photo
            ID (local law may require saving this information). Offer may not be
            available in all stores, and may vary between in-store and online
            trade-in. Some stores may have additional requirements. Apple or its
            trade-in partners reserve the right to refuse or limit quantity of
            any trade-in transaction for any reason. More details are available
            from Apple’s trade-in partner for trade-in and recycling of eligible
            devices. Restrictions and limitations may apply.
          </p>
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
            Learn more about how Apple Card applications are evaluated at{' '}
            <a href="https://support.apple.com/en-us/HT209218">
              support.apple.com/kb/HT209218
            </a>
            .
          </p>
          <p>A subscription is required for Apple TV+.</p>
          <p>
            Major League Baseball trademarks and copyrights are used with
            permission of MLB Advanced Media, L.P. All rights reserved.
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

            <div className={stl.linksBox}>
              <h5>Apple Wallet</h5>

              {appleWallet.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className={stl.linksContainer}>
            <div className={stl.linksBox}>
              <h5>Account</h5>

              {account.map(link => (
                <Link key={link} href="/">
                  {link}
                </Link>
              ))}
            </div>

            <div className={stl.linksBox}>
              <h5>Entertainment</h5>

              {entertainment.map(link => (
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

              {forGovernment.map(link => (
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
            other <Link href="/">other retailer</Link> near you. Or call
            1-800-MY-APPLE.
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
