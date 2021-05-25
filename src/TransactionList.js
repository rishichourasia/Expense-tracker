import React, { useContext } from 'react'
import {GlobalContext} from "./context/GlobalContext"
import Transaction from "./Transaction"

function TransactionList() {
  const {transactions} = useContext(GlobalContext)

  return (
        <div>
             <h3>History</h3>
      <ul  className="list">
       {transactions.map(transaction => <Transaction transaction={transaction} key={transaction.id}/>  )}
      </ul>

        </div>
    )
}

export default TransactionList
