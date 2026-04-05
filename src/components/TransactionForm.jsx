import { useEffect } from "react";
function TransactionForm({ onSave, onClose, form, setForm, editingTx }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form,
      id: Date.now()
     });
    onClose(); 
  };

  useEffect(() => {
  if (editingTx) {
    setForm(editingTx);
  }
}, [editingTx]);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      {/* Modal Box */}
      <div className="bg-[#0e0d0d] p-6 rounded-xl w-[90%] max-w-md space-y-3">
        <h2 className="text-white text-lg">Add Transaction</h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Date */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Date
            </label>
            <input
              type="date"
              className="w-full p-2 rounded text-white bg-[#1a1f2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Amount
            </label>
            <input
              type="number"
              className="w-full p-2 rounded text-white bg-[#1a1f2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setForm({ ...form, amount: +e.target.value })
              }
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Category
            </label>
            <input
              type="text"
              className="w-full p-2 rounded text-white bg-[#1a1f2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Type
            </label>
            <select
              className="w-full p-2 rounded text-white bg-[#1a1f2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-3">
            <button type="button" onClick={onClose}
              className="text-red-200 hover:text-red-600 text-xl border rounded border-red-400 py-2 px-4">
              Cancel
            </button>

            <button type="submit"
              className="text-green-200 hover:text-green-600 text-xl border rounded border-green-400 py-2 px-4">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TransactionForm;