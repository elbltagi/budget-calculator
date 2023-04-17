import React from "react";

function ExpenseForm({ handleAmount, handleCharge, charge, amount, OnSubmit }) {
  return (
    <form
      className="flex w-full justify-between mb-8 border-b-4 p-3 gap-8"
      onSubmit={OnSubmit}
    >
      <label className="flex-1 flex flex-col items-start justify-start">
        <p className="text-red-700 font-bold">Charge</p>
        <input
          type="text"
          className="border-b-2 pb-2 p border-black outline-0 w-full "
          onChange={(e) => handleCharge(e.target.value)}
          value={charge}
        />
      </label>
      <label className="flex-1 flex flex-col items-start justify-start">
        <p className="text-red-700 font-bold">Amount</p>
        <input
          type="number"
          className="border-b-2 pb-2 border-black outline-0 w-full"
          onChange={(e) => handleAmount(e.target.value)}
          value={amount}
        />
      </label>
      <button className="bg-slate-500 text-white p-4 rounded-lg hover:bg-slate-600 transition-all">
        Submit
      </button>
    </form>
  );
}

export default ExpenseForm;
