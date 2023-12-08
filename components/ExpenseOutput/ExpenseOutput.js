import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseList from './ExpenseList';
import { GlobalStyles } from '../../constants/style';

const ExpenseOutput = ({ expenses, expensesPeriodName, fallBackText }) => {
  let content = (
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>{fallBackText}</Text>
    </View>
  );
  if (Array.isArray(expenses) && expenses.length > 0) {
    content = <ExpenseList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpenseSummary
        expenses={expenses}
        periodName={expensesPeriodName}
      />
      {content}
    </View>
  );
};

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 12,
    textAlign: 'center',
  },
  infoContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
