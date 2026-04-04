import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Insights from './pages/Insights'
import Transactions from './pages/Transactions'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [role, setRole] = useState('Admin');
  return (
    <div className="App font-inter bg-[#FFFFFF] h-screen">
      <BrowserRouter>
      <Navbar role={role} setRole={setRole} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="insights" element={<Insights />} />
          <Route path="transactions" element={<Transactions role={role} setRole={setRole} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App