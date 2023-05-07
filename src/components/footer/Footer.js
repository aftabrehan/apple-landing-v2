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

  return (
    <footer className={stl.footer}>
      <div className={stl.content}>
        <div className={stl.descriptionContainer}>
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

        <div className={stl.linksContainer}></div>

        <div className={stl.infoContainer}>
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
