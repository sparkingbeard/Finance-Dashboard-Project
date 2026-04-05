import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Insights from './pages/Insights'
import Transactions from './pages/Transactions'
import Footer from './components/Footer'
import { useState } from 'react'

const initialData = [
 // JAN 
  { id: 1, date: "2026-01-05", amount: 50000, category: "Salary", type: "income" },
  { id: 2, date: "2026-01-08", amount: 3000, category: "Food", type: "expense" },
  { id: 3, date: "2026-01-12", amount: 8000, category: "Rent", type: "expense" },
  { id: 4, date: "2026-01-18", amount: 2000, category: "Transport", type: "expense" },
  { id: 5, date: "2026-01-22", amount: 4000, category: "Freelance", type: "income" },

  // FEB 
  { id: 6, date: "2026-02-03", amount: 50000, category: "Salary", type: "income" },
  { id: 7, date: "2026-02-07", amount: 3500, category: "Food", type: "expense" },
  { id: 8, date: "2026-02-10", amount: 8000, category: "Rent", type: "expense" },
  { id: 9, date: "2026-02-15", amount: 2500, category: "Shopping", type: "expense" },
  { id: 10, date: "2026-02-20", amount: 6000, category: "Freelance", type: "income" },

  // MAR
  { id: 11, date: "2026-03-02", amount: 50000, category: "Salary", type: "income" },
  { id: 12, date: "2026-03-06", amount: 4000, category: "Food", type: "expense" },
  { id: 13, date: "2026-03-10", amount: 8000, category: "Rent", type: "expense" },
  { id: 14, date: "2026-03-14", amount: 3000, category: "Entertainment", type: "expense" },
  { id: 15, date: "2026-03-22", amount: 7000, category: "Freelance", type: "income" },

  // APR 
  { id: 16, date: "2026-04-01", amount: 50000, category: "Salary", type: "income" },
  { id: 17, date: "2026-04-04", amount: 4500, category: "Food", type: "expense" },
  { id: 18, date: "2026-04-08", amount: 8000, category: "Rent", type: "expense" },
  { id: 19, date: "2026-04-12", amount: 2000, category: "Transport", type: "expense" },
  { id: 20, date: "2026-04-18", amount: 9000, category: "Freelance", type: "income" },

  // MAY 
  { id: 21, date: "2026-05-03", amount: 50000, category: "Salary", type: "income" },
  { id: 22, date: "2026-05-07", amount: 5000, category: "Food", type: "expense" },
  { id: 23, date: "2026-05-11", amount: 8000, category: "Rent", type: "expense" },
  { id: 24, date: "2026-05-16", amount: 3500, category: "Shopping", type: "expense" },
  { id: 25, date: "2026-05-21", amount: 10000, category: "Freelance", type: "income" }
];

function App() {
  const [role, setRole] = useState('Admin');
  const [transactions, setTransactions] = useState(initialData);
  return (
    <div className="App fon t-inter bg-[#FFFFFF] w-full min-h-screen">
      <BrowserRouter>
      <Navbar role={role} setRole={setRole} />
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="insights" element={<Insights transactions={transactions} />} />
          <Route path="transactions" element={<Transactions role={role} setRole={setRole} initialData={initialData} transactions={transactions} setTransactions={setTransactions}  />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App