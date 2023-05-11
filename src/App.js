import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import Count from './context/Count';
import { GlobalProvider } from './context/GlobalState';



function App() {
  return (

    // <Count /> 

    <GlobalProvider >

     <Header />
     <Balance />
     <IncomeExpense />
     <TransactionList />
     <AddTransaction />
     
    </GlobalProvider>
  );
}

export default App;