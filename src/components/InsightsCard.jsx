function InsightCard({ title, value, subtext, color }) {
  return (
    <div className="bg-[#0B0F19] p-4 rounded-xl">
      <p className="text-gray-400 text-sm">{title}</p>

      <h3 className={`text-lg mt-1 ${color}`}>
        {value}
      </h3>

      {subtext && (
        <p className="text-xs text-gray-500 mt-1">
          {subtext}
        </p>
      )}
    </div>
  );
}

export default InsightCard