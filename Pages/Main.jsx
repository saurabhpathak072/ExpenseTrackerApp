import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import StackNavigator from '../components/Navigation/StackNavigation/StackNavigator';
import { stackNavigation } from './MainNavigations';
import { GlobalStyles } from '../constants/style';

const Main = () => {
  return <StackNavigator screenOptions={{
    headerStyle:{backgroundColor: GlobalStyles.colors.primary500},
    headerTintColor: 'white'
  }} stackNav={stackNavigation} />;
};

export default Main;

const styles = StyleSheet.create({});
