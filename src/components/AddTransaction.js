import React,{useState} from 'react'
import "../App.css"



const AddTransaction = () => {

      const [text, setText] = useState("");

      const [amount,setAmount] = useState(0)


  return (
        <form className='form-control'>

            <div>

                <label htmlFor=''> Items</label>
                <input onChange={(e)=> setText(e.target
                    .value)} value={text} type='text' placeholder='Enter Text...'></input>

            </div>
            <div>

            <label htmlFor=''> Amount
(negative - expense, positive - income)</label>
                <input onChange={(e)=> setAmount(e.target.value)}  value={amount}type='number' ></input>

            </div>

            <p><button> Add Transaction</button></p>
         
       
        </form>
  )
}

export default AddTransaction