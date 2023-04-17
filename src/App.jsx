import { useEffect, useState } from "react";
import "./App.css";
import { Alert, ExpenseForm, ExpenseItem } from "./components";
import { v4 as uuid } from "uuid";

function App() {
  const [Expenses, setExpenses] = useState([]);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState();
  const [alert, setAlert] = useState();

  useEffect(() => {
    const data = localStorage.getItem("expenses");
    if (data) {
      setExpenses(JSON.parse(data));
    }
  }, []);

  const handleCharge = (value) => {
    setCharge(value);
  };
  const handleAmount = (value) => {
    setAmount(value);
  };
  const OnSubmit = (e) => {
    e.preventDefault();

    const array = Expenses;
    array.push({ id: uuid(), charge, amount });
    setExpenses(array);
    localStorage.setItem("expenses", JSON.stringify(array));
    handleAlert("item has been added", true);
    setAmount(0);
    setCharge("");
  };
  const handleAlert = (text, type) => {
    setAlert({ text, type });
    setTimeout(() => {
      setAlert();
    }, 700);
  };
  const deleteExpense = (index) => {
    var array = Expenses;
    array.splice(index, 1);
    setExpenses(array);
    handleAlert("item has been deleted", false);
    localStorage.setItem("expenses", JSON.stringify(array));
  };
  const handleEdit = (i, editCharge, editAmount) => {
    var array = Expenses;
    array[i].charge = editCharge;
    array[i].amount = editAmount;
    localStorage.setItem("expenses", JSON.stringify(array));
    setExpenses(array);
    handleAlert("item has been edited", true);
    return true;
  };
  return (
    <div className="App bg-zinc-600 min-h-screen  flex justify-start py-14 items-center flex-col">
      {alert && <Alert text={alert.text} type={alert.type} />}
      <div className="bg-white min-h-[60%] rounded-lg p-6  w-2/3 shadow-lg shadow-zinc-800">
        <ExpenseForm
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          charge={charge}
          OnSubmit={OnSubmit}
          amount={amount}
        />
        <ul className="flex flex-col gap-6">
          {Expenses.map((item, index) => {
            return (
              <ExpenseItem
                expense={item}
                index={index}
                handleDelete={deleteExpense}
                handleEdit={handleEdit}
              />
            );
          })}
        </ul>
      </div>
      <h1 className="mt-5 bg-white flex justify-between items-center rounded-lg p-3 shadow-lg shadow-black w-2/3">
        Total spend:
        <p className="text-yellow-600">
          {Expenses.reduce((prev, curr) => (prev += Number(curr.amount)), 0)}$
        </p>
      </h1>
    </div>
  );
}

export default App;
