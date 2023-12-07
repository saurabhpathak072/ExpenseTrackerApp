import { StyleSheet } from 'react-native';
import React from 'react';
import BottomTabNavigator from '../../components/Navigation/BottomTabNavigation/BottomTabNavigator';
import { bottomTabNavigation } from './ExpenseNavigations';
import { GlobalStyles } from '../../constants/style';

const ExpensesOverview = () => {
  return <BottomTabNavigator bottomTab={bottomTabNavigation} screenOptions={{
    headerStyle:{
      backgroundColor: GlobalStyles.colors.primary500
    },
    headerTintColor: 'white',
    tabBarStyle: {
      backgroundColor: GlobalStyles.colors.primary500
    },
    tabBarActiveTintColor: GlobalStyles.colors.accent500
  }}/>;
};

export default ExpensesOverview;

const styles = StyleSheet.create({});
