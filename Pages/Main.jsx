import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import StackNavigator from '../components/Navigation/StackNavigation/StackNavigator';
import { stackNavigation } from './MainNavigations';

const Main = () => {
  return <StackNavigator stackNav={stackNavigation} />;
};

export default Main;

const styles = StyleSheet.create({});
