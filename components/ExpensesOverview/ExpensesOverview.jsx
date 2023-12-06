import { StyleSheet } from 'react-native';
import React from 'react';
import BottomTabNavigator from '../Navigation/BottomTabNavigation/BottomTabNavigator';
import { bottomTabNavigation } from './ExpenseNavigations';

const ExpensesOverview = () => {
  return <BottomTabNavigator bottomTab={bottomTabNavigation} />;
};

export default ExpensesOverview;

const styles = StyleSheet.create({});
