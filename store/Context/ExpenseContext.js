import { createContext, useReducer, useState } from 'react';
import { DUMMY_EXPENSES } from '../../data/expenses-dummy-data';
import expenseReducer from './ExpenseReducer';

export const ExpenseCtx = createContext({
    expensesList:[],
    addExpense:({date,amount,description})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id,{date,amount,description})=>{},
});

const ExpenseContextProvider = ({ children }) => {
  const [expenseState, dispatch] = useReducer(expenseReducer,DUMMY_EXPENSES)

  const addExpense =(expenseData)=>{
    dispatch({type:'ADD', payload:expenseData})
  }

  const deleteExpense=(id)=>{
    dispatch({type:'DELETE',payload:id})
  }

  const updatedExpense=(id,expenseData)=>{
    dispatch({type:'UPDATE',payload:{id,data:expenseData}})
  }

  const values = {
    expensesList: expenseState,
    addExpense:addExpense,
    deleteExpense:deleteExpense,
    updateExpense:updatedExpense,
  };
  return <ExpenseCtx.Provider value={values}>{children}</ExpenseCtx.Provider>;
};

export default ExpenseContextProvider;
