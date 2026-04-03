import React from 'react'
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

function BalanceLineChart({ data }) {
    return (
        <div className="bg-[#0B0F19] p-4 rounded-xl shadow">
            <h3 className="text-sm text-gray-400 mb-2">Balance Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="Balance"
                        stroke="#2563eb"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default BalanceLineChart