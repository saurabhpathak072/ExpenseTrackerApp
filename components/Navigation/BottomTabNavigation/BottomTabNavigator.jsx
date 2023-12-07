import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabNavigator = ({ bottomTab, screenOptions }) => {
  const BottomTab = createBottomTabNavigator();
  if (Array.isArray(bottomTab) && bottomTab.length > 0) {
    return (
      <BottomTab.Navigator screenOptions={screenOptions}>
        {bottomTab.map((tab, index) => {
          return (
            <BottomTab.Screen
              name={tab.name}
              component={tab.component}
              key={index}
              options={tab.options}
            />
          );
        })}
      </BottomTab.Navigator>
    );
  }

  return null;
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
