import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StampsCollection from './pages/StampsCollection'
import CoinsCollection from './pages/CoinsCollection'
import Admin from './pages/Admin'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stamps" element={<StampsCollection />} />
        <Route path="/coins" element={<CoinsCollection />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App


