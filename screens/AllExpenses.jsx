import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput'

const AllExpenses = () => {
  return (
    <>
      <ExpenseOutput expensesPeriodName={"All"}/>
    </>
  )
}

export default AllExpenses

const styles = StyleSheet.create({})