import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'

interface NavbarProps {
  currentPage?: string
}

function Navbar({ currentPage }: NavbarProps) {
  const navigate = useNavigate()
  const clickTimeoutRef = useRef<number | null>(null)

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (clickTimeoutRef.current) {
      // Double click detected
      clearTimeout(clickTimeoutRef.current)
      clickTimeoutRef.current = null
      navigate('/admin')
    } else {
      // First click - wait for potential second click
      clickTimeoutRef.current = setTimeout(() => {
        clickTimeoutRef.current = null
        navigate('/')
      }, 300) // 300ms window for double-click
    }
  }

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="/" onClick={handleLogoClick} className="logo-container">
          <img src="/logo.jpg" alt="Koshy's Vintage Vault Logo" className="logo" />
          <h1 className="brand-name">Koshy's Vintage Vault</h1>
        </a>
        <ul className="nav-links">
          <li><Link to="/" className={currentPage === 'home' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/stamps" className={currentPage === 'stamps' ? 'active' : ''}>Stamps</Link></li>
          <li><Link to="/coins" className={currentPage === 'coins' ? 'active' : ''}>Coins</Link></li>
          {currentPage === 'admin' && (
            <li><Link to="/admin" className="active">Admin</Link></li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
