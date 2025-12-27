import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StampsCollection from './pages/StampsCollection'
import CoinsCollection from './pages/CoinsCollection'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stamps" element={<StampsCollection />} />
        <Route path="/coins" element={<CoinsCollection />} />
      </Routes>
    </Router>
  )
}

export default App
