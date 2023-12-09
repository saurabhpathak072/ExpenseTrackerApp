import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';
import { ExpenseCtx } from '../store/Context/ExpenseContext';
import { getDateMinusDays } from '../utils/Date/date';
import { fetchExpenses } from '../utils/Http/expensesRequest';
import LoaderOverlay from '../components/UI/Loader/LoaderOverlay';
import ErrorOverlay from '../components/UI/Loader/ErrorOverlay';

const RecentExpenses = () => {
  const { expensesList, setExpenses } = useContext(ExpenseCtx);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const recentExpenses = expensesList.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  const setInitializeData = async () => {
    setIsLoading(true);
    return new Promise(async (resolve, reject) => {
      const result = await fetchExpenses().catch((err) => {
        reject(err);
      });

      console.log('result', result);
      resolve(result);
    })
      .then((expenses) => {
        setExpenses(expenses);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        Alert.alert(err.message);
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    try {
      setInitializeData();
    } catch (error) {
      setError(error);
    }
  }, []);

  if (error && !isLoading) {
    console.log('error',error);
    return (
      <ErrorOverlay
        message={'Could not fetched'}
        onConfirm={() => setError(null)}
      />
    );
  }
  if (isLoading) {
    return <LoaderOverlay />;
  }
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
