import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FlatListCustom from '../UI/FlatList/FlatList';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  const renderExpenseItemHandler = (item) => {
    return <ExpenseItem {...item}/>;
  };
  return (
    <View style={styles.container}>
      <FlatListCustom
        data={expenses}
        renderComponentData={renderExpenseItemHandler}
        localKey={'id'}
      />
    </View>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
});
