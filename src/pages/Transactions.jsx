import React from 'react'
import TransactionsTable from '../components/TransactionsTable'
import { useState } from 'react'

const transactions = [
  {
    id: 1,
    date: "2026-04-01",
    amount: 50000,
    category: "Salary",
    type: "income",
  },
  {
    id: 2,
    date: "2026-04-02",
    amount: 2000,
    category: "Food",
    type: "expense",
  },
  {
    id: 3,
    date: "2026-04-03",
    amount: 1500,
    category: "Transport",
    type: "expense",
  },
  {
    id: 4,
    date: "2026-04-04",
    amount: 10000,
    category: "Freelance",
    type: "income",
  },
  {
    id: 5,
    date: "2026-04-05",
    amount: 8000,
    category: "Rent",
    type: "expense",
  },
  {
    id: 6,
    date: "2026-04-06",
    amount: 1200,
    category: "Entertainment",
    type: "expense",
  },
  {
    id: 7,
    date: "2026-04-07",
    amount: 3000,
    category: "Shopping",
    type: "expense",
  },
  {
    id: 8,
    date: "2026-04-08",
    amount: 2500,
    category: "Groceries",
    type: "expense",
  },
  {
    id: 9,
    date: "2026-04-09",
    amount: 7000,
    category: "Investment Return",
    type: "income",
  },
  {
    id: 10,
    date: "2026-04-10",
    amount: 1800,
    category: "Food",
    type: "expense",
  },
  {
    id: 11,
    date: "2026-04-11",
    amount: 2200,
    category: "Transport",
    type: "expense",
  },
  {
    id: 12,
    date: "2026-04-12",
    amount: 4000,
    category: "Bonus",
    type: "income",
  },
  {
    id: 13,
    date: "2026-04-13",
    amount: 3500,
    category: "Shopping",
    type: "expense",
  },
  {
    id: 14,
    date: "2026-04-14",
    amount: 900,
    category: "Subscriptions",
    type: "expense",
  },
  {
    id: 15,
    date: "2026-04-15",
    amount: 6000,
    category: "Freelance",
    type: "income",
  },
];
function Transactions({role, setRole}) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");

  const filteredTransactions = transactions.filter((t)=>{
    if(filter === "all") return transactions;
    return t.type === filter;
  }).filter((t)=>{
    return t.category.toLowerCase().includes(search.toLowerCase());
  }).sort((a,b)=>{
    return sort === "asc" ? a.amount - b.amount : b.amount - a.amount;
  });


  return (
    <div className='min-h-screen'>
      <TransactionsTable transactions ={filteredTransactions} setFilter={setFilter} setSearch={setSearch} setSort={setSort} role={role} setRole={setRole}/>
    </div>
  )
}

export default Transactions