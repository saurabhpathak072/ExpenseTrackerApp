import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = ({ stackNav, screenOptions }) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {stackNav.map((stack, index) => {
        return (
          <Stack.Screen
            name={stack.name}
            key={index}
            component={stack.component}
            options={stack.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
