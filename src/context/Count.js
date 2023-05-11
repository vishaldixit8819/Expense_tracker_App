import React,{useReducer, useState} from 'react'


function reducer( state, action){

    switch(action.type){

        case "increment" : 

        return {count: state.count + 1}

        case "decrement" : 
        return {count: state.count- 1}

        default :

        return state
    }
}

const Count = () => {

    // const [count, setCount] = useState(0);

   const [ state, dispatch] =  useReducer(reducer, {count: 0})

    function increment(){

        // setCount(ini=> ini + 1)

        dispatch({

            type: "increment"

        })

    }

    function decrement(){

        // setCount(ini=> ini - 1)

        dispatch({

            type: "decrement"
        })
    
    
    }
    
  return (
    <div><button onClick={increment}>+</button>{state.count} <button onClick={decrement}>-</button></div>
  )
}

export default Count