import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'

function App() {
  return (
    <div className="min-h-screen bg-neutral-800 bg-connection">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>  
  )
}

export default App