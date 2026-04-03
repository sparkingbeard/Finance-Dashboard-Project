import React from 'react'
import SummaryCard from '../components/SummaryCard'
import BalanceLineChart from '../components/charts/BalanceLineChart'
import SpendingPieChart from '../components/charts/SpendingPieChart'
import SavingsBarChart from '../components/charts/SavingsBarChart'

const cardData = [
  { title: "Total Balance", value: "₹45,000", change: "+5%", type: "balance" },
  { title: "Income", value: "₹25,000", change: "+8%", type: "income" },
  { title: "Expenses", value: "₹12,000", change: "-3%", type: "expense" },
];

const BalanceChartData = [
  { month: "Jan", Balance: 20000 },
  { month: "Feb", Balance: 25000 },
  { month: "Mar", Balance: 22000 },
];
const spendingBreakdownData = [
 { name: "Food", value: 5000 },
  { name: "Rent", value: 10000 },
  { name: "Travel", value: 2000 },
];
const savingsTrendData = [
  { month: "Jan", Savings_percent: 20 },
  { month: "Feb", Savings_percent: 25 },
  { month: "Mar", Savings_percent: 22 },
];

function Dashboard() {
  return (
    <div className="Dashboard p-4 space-y-32 min-h-screen">
      {/* {cards section} */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {cardData.map((card) => (
          <SummaryCard key={card.title} {...card} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <BalanceLineChart data ={BalanceChartData} />
        <SpendingPieChart data ={spendingBreakdownData} />
        <SavingsBarChart data ={savingsTrendData} />
      </div>
    </div>
  )
}

export default Dashboard