import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'
import { DUMMY_EXPENSES } from '../../data/expenses-dummy-data'
import { GlobalStyles } from '../../constants/style'

const ExpenseOutput = ({expenses, expensesPeriodName}) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriodName}/>
      <ExpenseList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

export default ExpenseOutput

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
})