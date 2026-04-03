import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from "recharts";

const COLORS = ["#2563eb", "#60a5fa", "#93c5fd"];

 function SpendingPieChart({ data }) {
  return (
    <div className="bg-[#0B0F19] p-4 rounded-xl shadow">
      <h3 className="text-sm text-gray-400 mb-2">Spending Breakdown</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export default SpendingPieChart