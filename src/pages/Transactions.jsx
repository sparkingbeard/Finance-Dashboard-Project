import React from 'react'
import TransactionsTable from '../components/TransactionsTable'
import { useState } from 'react'
import TransactionForm from '../components/TransactionForm'


function Transactions({ role, setRole, transactions, setTransactions }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [showForm, setShowForm] = useState(false);
  const [editingTx, setEditingTx] = useState(null);
  const [form, setForm] = useState({
    id: "",
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const filteredTransactions = transactions.filter((t) => {
    if (filter === "all") return transactions;
    return t.type === filter;
  }).filter((t) => {
    return t.category.toLowerCase().includes(search.toLowerCase());
  }).sort((a, b) => {
    return sort === "asc" ? a.amount - b.amount : b.amount - a.amount;
  });

  const handleSave = (newTransaction) => {
    if (editingTx) {
      // to update transaction
      setTransactions((prev) =>
        prev.map((t) =>
          t.id === editingTx.id ? { ...newTransaction, id: t.id } : t
        )
      );
    } else {
      // To add new transaction 
      setTransactions((prev) => [
        ...prev,
        { ...newTransaction, id: Date.now() },
      ]);
      setForm({
        id: "",
        date: "",
        amount: "",
        category: "",
        type: "expense",
      });
    }

    setShowForm(false);
    setEditingTx(null)
  }

  const handleDelete = (id) => {
    setTransactions((prevTransactions) => prevTransactions.filter(t => t.id !== id));
  }

  return (
    <div className='min-h-screen'>
      <TransactionsTable transactions={filteredTransactions} setFilter={setFilter} setSearch={setSearch} setSort={setSort} role={role} setRole={setRole} setShowForm={setShowForm} onDelete={handleDelete} onEdit={(tx) => {
        setEditingTx(tx);
        setShowForm(true);
      }} />
      {showForm && <TransactionForm onSave={handleSave} onClose={() => setShowForm(false)} form={form} setForm={setForm} editingTx={editingTx} />}
    </div>
  )
}

export default Transactions