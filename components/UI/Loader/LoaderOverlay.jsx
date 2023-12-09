import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../../constants/style';

const LoaderOverlay = () => {
  return (
    <View style={styles.container}>
    
      <ActivityIndicator
        size={'large'}
        color={'white'}
      />
    </View>
  );
};

export default LoaderOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    // backgroundColor: 'rgba(0,0,0,0.15)',

  },
});
