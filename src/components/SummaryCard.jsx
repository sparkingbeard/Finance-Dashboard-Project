import React from 'react';

function SummaryCard({ title, value, change, type }) {
  const changeColor =
    type === "expense" ? "text-red-400" : "text-green-400";

  return (
    <div className="bg-[#0B0F19] p-4 rounded-xl shadow">
      <h3 className="text-sm text-gray-400">{title}</h3>
      
      <p className="text-2xl font-semibold text-white mt-1">
        {value}
      </p>

      <p className={`text-sm mt-1 ${changeColor}`}>
        {change}
      </p>
    </div>
  );
}

export default SummaryCard;