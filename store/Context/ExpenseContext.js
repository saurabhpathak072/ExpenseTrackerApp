import { createContext, useReducer, useState } from 'react';
import expenseReducer from './ExpenseReducer';

export const ExpenseCtx = createContext({
  expensesList: [],
  addExpense: ({ date, amount, description }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { date, amount, description }) => {},
});

const ExpenseContextProvider = ({ children }) => {
  const [expenseState, dispatch] = useReducer(expenseReducer, []);

  const setExpenses = (expenses) => {
    dispatch({ type: 'SET', payload: expenses });
  };

  const addExpense = (expenseData) => {
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const updatedExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id, data: expenseData } });
  };

  const values = {
    expensesList: expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updatedExpense,
    setExpenses: setExpenses,
  };
  return <ExpenseCtx.Provider value={values}>{children}</ExpenseCtx.Provider>;
};

export default ExpenseContextProvider;
