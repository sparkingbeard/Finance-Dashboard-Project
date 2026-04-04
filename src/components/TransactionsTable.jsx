import React from 'react'
import { useState } from 'react'


function TransactionsTable({ transactions, setFilter, setSearch, role }) {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="bg-[#0B0F19] p-4">
            <div className="flex gap-10 items-center mb-4">
                <h3 className="text-white">Transactions</h3>
                {/* {filter} */}
                <select className="bg-[#1A1F2E] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => { setFilter(e.target.value) }}
                >
                    <option value="all">All Types</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                {/* {searchbar} */}
                <input
                    type="text"
                    placeholder='Search Category'
                    onChange={(e) => setSearch(e.target.value)}
                    className='bg-[#ffff] text-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1'
                ></input>

                {/* {Sorting dropdown} */}
                <select className="bg-[#1A1F2E] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1 ml-190"
                    onChange={(e) => { setSort(e.target.value) }}
                >
                    <option value="asc"> Low → High  (Amount)</option>
                    <option value="desc"> High → Low  (Amount)</option>
                </select>

            </div>

            <table className="w-full text-sm text-center">
                <thead className="text-gray-400">
                    <tr>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Type</th>
                        {role === "Admin" && <th className="px-4 py-3">Actions</th>}
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((t) => (
                        <tr key={t.id} className="border-t border-gray-700 hover:bg-gray-800">

                            <td className='text-blue-300 px-4 py-3'>{t.date}</td>
                            <td className="text-white">₹{t.amount}</td>
                            <td className='text-yellow-200'>{t.category}</td>
                            <td
                                className={
                                    t.type === "income"
                                        ? "text-green-400"
                                        : "text-red-400"
                                }
                            >
                                {t.type}
                            </td>
                            {role === "Admin" && (<td>
                                <button className="text-blue-200 hover:text-blue-600">Edit</button>
                                <button className="text-red-400 hover:text-red-600 ml-4">Delete</button>
                            </td>)}

                        </tr>
                    ))}
                </tbody>

                {role === "Admin" && (
                    <tfoot>
                        <tr>
                            <td colSpan="5" className="text-center py-2">
                                <button className="text-green-200 hover:text-green-600 text-xl border rounded border-green-400 py-2 px-4"
                                onClick={()=> setShowForm(true)}
                                >Add Transaction</button>
                            </td>
                        </tr>
                    </tfoot>
                )}
            </table>
        </div>
    );
}

export default TransactionsTable