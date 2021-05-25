import React, { useState , useContext} from 'react'
import {GlobalContext} from "./context/GlobalContext"

function AddTransaction() {
    const [text, settext] = useState("")
    const [amount, setamount] = useState("")
    const {addTransaction} = useContext(GlobalContext)

    function willDo (){
      const newtransaction = {
        text,
        amount: +amount,
        id: Math.floor(Math.random() * 100000000)
      }
      addTransaction(newtransaction)
      settext("");
      setamount("");
    }
    function onSubmit (e){
      e.preventDefault();
      const isTrue = text.length > 0;
      isTrue ? willDo() : alert("Please Enter Something")
     
    }  
    return (
        <>
           <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction about</label>
          <input type="text" id="text"  placeholder="Enter text..." value={text} onChange={e => settext(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (-) expense ,  (+) income</label>
          <input type="text" id="amount" placeholder="Enter amount..." value={amount} onChange={e => setamount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form> 
        </>
    )
}

export default AddTransaction
                   
