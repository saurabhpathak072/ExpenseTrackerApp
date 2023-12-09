import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';
import { ExpenseCtx } from '../store/Context/ExpenseContext';
import { getDateMinusDays } from '../utils/Date/date';
import { fetchExpenses } from '../utils/Http/expensesRequest';

const RecentExpenses = () => {
  const { expensesList, setExpenses } = useContext(ExpenseCtx);
  const recentExpenses = expensesList.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      setExpenses(expenses);
    }
    getExpenses();
  }, []);
  return (
    <>
      <ExpenseOutput
        fallBackText={'There is no expense register for last 7 days'}
        expenses={recentExpenses}
        expensesPeriodName={'Last 7 Days'}
      />
    </>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
