import './App.css';
import React from "react";
import Header from "./Header"
import Balance from "./Balance"
import IncomeExpense from "./IncomeExpense"
import TransactionList from "./TransactionList"
import AddTransaction from "./AddTransaction"
import {GlobalProvider} from "../src/context/GlobalContext"

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container">
       <Balance/>
       <IncomeExpense/>  
      <TransactionList/>
      <AddTransaction/>
     </div>
     </GlobalProvider>
  );
}

export default App;
