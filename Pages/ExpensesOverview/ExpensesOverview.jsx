import { StyleSheet } from 'react-native';
import React from 'react';
import BottomTabNavigator from '../../components/Navigation/BottomTabNavigation/BottomTabNavigator';
import { bottomTabNavigation } from './ExpenseNavigations';
import { GlobalStyles } from '../../constants/style';
import IconButton from '../../components/UI/Buttons/IconButton';
import { navigation_names } from '../../utils/Navigations/constants';

const ExpensesOverview = () => {
  return <BottomTabNavigator bottomTab={bottomTabNavigation} screenOptions={({navigation})=>({
    headerStyle:{
      backgroundColor: GlobalStyles.colors.primary500
    },
    headerTintColor: 'white',
    tabBarStyle: {
      backgroundColor: GlobalStyles.colors.primary500
    },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight:({tintColor})=>{
      return <IconButton icon={'add'} color={tintColor} size={24} onPress={()=>{navigation.navigate(navigation_names.ManageExpense)}}/>
    }
  })}/>;
};

export default ExpensesOverview;

const styles = StyleSheet.create({});
