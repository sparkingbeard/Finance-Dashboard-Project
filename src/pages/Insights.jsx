import React from "react";
import InsightCard from "../components/InsightsCard";

function Insights({ transactions }) {
  //Highest Spending Category logic
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  let highestCategory = "N/A";
  let highestAmount = 0;

  for (let cat in categoryMap) {
    if (categoryMap[cat] > highestAmount) {
      highestAmount = categoryMap[cat];
      highestCategory = cat;
    }
  }

  // Monthly trend logic
  const monthlyMap = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);

    if (!monthlyMap[month]) {
      monthlyMap[month] = { income: 0, expense: 0 };
    }

    monthlyMap[month][t.type] += t.amount;
  });

  const months = Object.keys(monthlyMap).sort();

  let comparisonText = "Not enough data";

  if (months.length >= 2) {
    const last = monthlyMap[months[months.length - 1]];
    const prev = monthlyMap[months[months.length - 2]];

    const lastSavings = last.income - last.expense;
    const prevSavings = prev.income - prev.expense;

    comparisonText =
      lastSavings > prevSavings
        ? "Savings improved 📈"
        : "Savings decreased 📉";
  }

  //obsesrvations logic

  let observation = "Your spending is balanced 👍";

  if (highestAmount > 5000) {
    observation = `You are spending heavily on ${highestCategory}`;
  }

  const insightsData = [
    { title: "Highest Spending", value: highestCategory, subtext: `₹${highestAmount}`, color: "text-red-400" },
    { title: "Monthly Trend", value: comparisonText, color: "text-blue-400" },
    { title: "Observation", value: observation, color: "text-green-400" },
  ];


  return (
    <div className="p-4 space-y-6 h-screen">

      <h2 className="text-white text-xl font-semibold">
        Insights
      </h2>

      <div className="flex flex-col gap-4">
        {insightsData.map((item) => (
          <InsightCard key={item.title} {...item} />
        ))}
      </div>

    </div>
  );
}

export default Insights;