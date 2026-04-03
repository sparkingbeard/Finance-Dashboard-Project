import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Insights from './pages/Insights'
import Transactions from './pages/Transactions'

function App() {
  return (
    <div className="App font-inter bg-[#FFFFFF] h-screen">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="insights" element={<Insights />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App