import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

function ExpenseItem({ expense, index, handleDelete, handleEdit }) {
  const { id, charge, amount } = expense;
  const [editMode, setEditMode] = useState(false);
  const [editCharge, setEditCharge] = useState(charge);
  const [editAmount, setEditAmount] = useState(amount);
  const submit = (e) => {
    e.preventDefault();
    if (handleEdit(index, editCharge, editAmount)) {
      setEditMode(false);
    }
  };
  useEffect(() => {
    setEditCharge(charge);
    setEditAmount(amount);
  }, [charge, amount]);
  return (
    <div
      key={id}
      className="w-full flex justify-between border-b-2 items-center pb-3"
    >
      {!editMode ? (
        <>
          <p>{charge}</p>
          <p className="bg-neutral-700 text-white p-3 rounded-md shadow-md shadow-neutral-900">
            {amount}$
          </p>
          <div className="buttons">
            <button aria-label="Edit" onClick={() => setEditMode(true)}>
              <MdEdit size={26} color="green" />
            </button>
            <button aria-label="Delete" onClick={() => handleDelete(index)}>
              <MdDelete size={26} color="red" />
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={submit} className="w-full flex justify-between gap-8">
          <input
            type="text"
            className="flex-1 border-2 p-2"
            placeholder="Charge"
            value={editCharge}
            onChange={(e) => setEditCharge(e.target.value)}
          />
          <input
            type="number"
            className="flex-1 border-2 p-2"
            placeholder="amount"
            value={editAmount}
            onChange={(e) => setEditAmount(e.target.value)}
          />
          <button
            className="p-4 bg-orange-600 border-2 border-orange-600 hover:bg-white transition-all hover:text-orange-600 rounded-lg text-white"
            type="submit"
          >
            Confirm
          </button>
        </form>
      )}
    </div>
  );
}

export default ExpenseItem;
