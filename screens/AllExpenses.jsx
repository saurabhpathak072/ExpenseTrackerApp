import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput'
import { ExpenseCtx } from '../store/Context/ExpenseContext';

const AllExpenses = () => {
  const {expensesList} = useContext(ExpenseCtx);
  return (
    <>
      <ExpenseOutput fallBackText={"There is no expense registered!!"} expenses={expensesList} expensesPeriodName={"All"}/>
    </>
  )
}

export default AllExpenses

const styles = StyleSheet.create({})