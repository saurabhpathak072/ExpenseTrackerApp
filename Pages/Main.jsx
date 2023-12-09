import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

import StackNavigator from '../components/Navigation/StackNavigation/StackNavigator';
import { stackNavigation } from './MainNavigations';
import { GlobalStyles } from '../constants/style';
import LoaderOverlay from '../components/UI/Loader/LoaderOverlay';
import { ExpenseCtx } from '../store/Context/ExpenseContext';

const Main = () => {
  const {isLoading} = useContext(ExpenseCtx);
  if(isLoading){
    return <LoaderOverlay />
  }
  return <StackNavigator screenOptions={{
    headerStyle:{backgroundColor: GlobalStyles.colors.primary500},
    headerTintColor: 'white'
  }} stackNav={stackNavigation} />;
};

export default Main;

const styles = StyleSheet.create({});
