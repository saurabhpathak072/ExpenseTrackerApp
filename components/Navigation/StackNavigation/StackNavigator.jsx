import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = ({ stackNav }) => {
  return (
    <Stack.Navigator>
      {stackNav.map((stack, index) => {
        return (
          <Stack.Screen
            name={stack.name}
            key={index}
            component={stack.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
