import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Admin.css'

interface FormData {
  name: string
  year: string
  country: string
  rarity: string
  price: string
  description: string
  image: File | null
}

function Admin() {
  const [activeTab, setActiveTab] = useState<'stamps' | 'coins'>('stamps')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    year: '',
    country: '',
    rarity: '',
    price: '',
    description: '',
    image: null
  })
  const [imagePreview, setImagePreview] = useState<string>('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, image: file }))
      
      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would typically send the data to your backend
    console.log('Submitting:', { type: activeTab, ...formData })
    
    // Simulate success
    setSubmitStatus('success')
    setTimeout(() => {
      setSubmitStatus('idle')
      // Reset form
      setFormData({
        name: '',
        year: '',
        country: '',
        rarity: '',
        price: '',
        description: '',
        image: null
      })
      setImagePreview('')
    }, 2000)
  }

  const rarityOptions = ['Common', 'Uncommon', 'Rare', 'Very Rare', 'Extremely Rare', 'Unique']

  return (
    <div className="admin-page">
      {/* Navigation */}
      <Navbar currentPage="admin" />

      {/* Admin Header */}
      <section className="admin-header">
        <div className="container">
          <h1 className="admin-title">Admin Panel</h1>
          <p className="admin-subtitle">Manage your stamp and coin collections</p>
        </div>
      </section>

      {/* Admin Content */}
      <section className="admin-content">
        <div className="container">
          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              className={`tab-button ${activeTab === 'stamps' ? 'active' : ''}`}
              onClick={() => setActiveTab('stamps')}
            >
              Add Stamp
            </button>
            <button
              className={`tab-button ${activeTab === 'coins' ? 'active' : ''}`}
              onClick={() => setActiveTab('coins')}
            >
              Add Coin
            </button>
          </div>

          {/* Form */}
          <div className="admin-form-container">
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-grid">
                {/* Left Column */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="name">
                      {activeTab === 'stamps' ? 'Stamp' : 'Coin'} Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={`e.g., ${activeTab === 'stamps' ? 'Penny Black' : '1933 Double Eagle'}`}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="year">Year *</label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="e.g., 1840"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="e.g., United States"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="rarity">Rarity *</label>
                    <select
                      id="rarity"
                      name="rarity"
                      value={formData.rarity}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select rarity...</option>
                      {rarityOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="price">Price *</label>
                    <input
                      type="text"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="e.g., $3,000 - $5,000"
                      required
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="description">Description *</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Enter a detailed description..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="image">Image *</label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                    />
                    {imagePreview && (
                      <div className="image-preview">
                        <img src={imagePreview} alt="Preview" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-large">
                  Add {activeTab === 'stamps' ? 'Stamp' : 'Coin'}
                </button>
                {submitStatus === 'success' && (
                  <div className="success-message">
                    ✓ {activeTab === 'stamps' ? 'Stamp' : 'Coin'} added successfully!
                  </div>
                )}
              </div>
            </form>
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

export default Admin
