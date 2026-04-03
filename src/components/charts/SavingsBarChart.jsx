import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import { CartesianGrid } from "recharts";

 function SavingsChart({ data }) {
  return (
    <div className="bg-[#0B0F19] p-4 rounded-xl shadow">
      <h3 className="text-sm text-gray-400 mb-2">Monthly Savings</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Bar dataKey="Savings_percent" fill="#60a5fa" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default SavingsChart