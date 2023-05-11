import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const intialTransactions = {
    
    transactions: [
        {id: 1, text: "Salary" , amount: 400},
        {id: 2, text: "nashe" , amount: -200},
        {id: 3, text: "gf/bf/other ke kharche " , amount: -150},
        {id: 4, text: "vasuli" , amount: 500},
    ]
}

export const GlobalContext = createContext(intialTransactions)

// Provider Component 

export const GlobalProvider = ({children})=>{


   const [state, dispatch ] = useReducer( AppReducer , intialTransactions );


    return (<GlobalContext.Provider value={{
        
        transactions : state.transaction

    }}>

    {children}

    </ GlobalContext.Provider>
    
    ) 
}