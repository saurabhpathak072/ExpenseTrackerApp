import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput'

const RecentExpenses = () => {
  return (
    <>
      <ExpenseOutput expensesPeriodName={"Last 7 Days"}/>
    </>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})