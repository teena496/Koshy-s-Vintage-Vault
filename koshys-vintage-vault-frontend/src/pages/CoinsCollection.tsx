import { Link } from 'react-router-dom'
import './CoinsCollection.css'

interface Coin {
  id: number
  name: string
  year: string
  country: string
  rarity: string
  price: string
  description: string
  image: string
}

const coinsData: Coin[] = [
  {
    id: 1,
    name: '1933 Double Eagle',
    year: '1933',
    country: 'United States',
    rarity: 'Extremely Rare',
    price: '$18,900,000',
    description: 'One of the most valuable coins in the world. Only a handful exist legally. Features Lady Liberty on the obverse and a flying eagle on the reverse.',
    image: '/coins-collection.png'
  },
  {
    id: 2,
    name: 'Flowing Hair Silver Dollar',
    year: '1794',
    country: 'United States',
    rarity: 'Extremely Rare',
    price: '$10,000,000+',
    description: 'The first dollar coin issued by the United States federal government. Features Lady Liberty with flowing hair. A cornerstone of American numismatics.',
    image: '/coins-collection.png'
  },
  {
    id: 3,
    name: 'Edward III Florin',
    year: '1343',
    country: 'England',
    rarity: 'Unique',
    price: '$6,800,000',
    description: 'One of only three known examples. Medieval gold coin from the reign of Edward III. Extremely important to British numismatic history.',
    image: '/coins-collection.png'
  },
  {
    id: 4,
    name: 'Brasher Doubloon',
    year: '1787',
    country: 'United States',
    rarity: 'Very Rare',
    price: '$9,360,000',
    description: 'Early American gold coin made by goldsmith Ephraim Brasher. Features the sun rising over mountains and the motto "NOVA EBORACA COLUMBIA EXCELSIOR".',
    image: '/coins-collection.png'
  },
  {
    id: 5,
    name: 'Saint-Gaudens Double Eagle',
    year: '1907',
    country: 'United States',
    rarity: 'Rare',
    price: '$7,590,020',
    description: 'Considered one of the most beautiful coins ever minted. Ultra high relief design by Augustus Saint-Gaudens. Features Lady Liberty striding forward.',
    image: '/coins-collection.png'
  },
  {
    id: 6,
    name: 'Liberty Head Nickel',
    year: '1913',
    country: 'United States',
    rarity: 'Extremely Rare',
    price: '$4,560,000',
    description: 'Only five specimens known to exist. Unauthorized striking makes this one of the most mysterious and valuable coins in American numismatics.',
    image: '/coins-collection.png'
  }
]

function CoinsCollection() {
  return (
    <div className="coins-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-content">
          <Link to="/" className="logo-container">
            <img src="/logo.jpg" alt="Koshy's Vintage Vault Logo" className="logo" />
            <h1 className="brand-name">Koshy's Vintage Vault</h1>
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stamps">Stamps</Link></li>
            <li><Link to="/coins">Coins</Link></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Rare Coins Collection</h1>
          <p className="page-subtitle">
            Discover our curated selection of the world's most sought-after numismatic treasures
          </p>
        </div>
      </section>

      {/* Coins Grid */}
      <section className="coins-grid-section">
        <div className="container">
          <div className="coins-grid">
            {coinsData.map((coin) => (
              <div key={coin.id} className="coin-card">
                <div className="coin-image-container">
                  <img src={coin.image} alt={coin.name} className="coin-image" />
                  <div className="coin-rarity-badge">{coin.rarity}</div>
                </div>
                <div className="coin-details">
                  <h3 className="coin-name">{coin.name}</h3>
                  <div className="coin-meta">
                    <span className="coin-year">{coin.year}</span>
                    <span className="coin-divider">•</span>
                    <span className="coin-country">{coin.country}</span>
                  </div>
                  <p className="coin-description">{coin.description}</p>
                  <div className="coin-footer">
                    <span className="coin-price">{coin.price}</span>
                    <button className="btn btn-primary btn-sm">Inquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Koshy's Vintage Vault</h3>
              <p>
                Your trusted source for rare stamps and coins. Preserving history, one collectible at a time.
              </p>
            </div>
            
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/stamps">Stamps</Link></li>
                <li><Link to="/coins">Coins</Link></li>
                <li><a href="/#about">About Us</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: info@koshysvintagevault.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Mon-Sat, 10AM-6PM</p>
            </div>
            
            <div className="footer-section">
              <h3>Visit Our Store</h3>
              <p>123 Heritage Lane</p>
              <p>Historic District</p>
              <p>City, State 12345</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Koshy's Vintage Vault. All rights reserved. | Established 1990</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CoinsCollection
