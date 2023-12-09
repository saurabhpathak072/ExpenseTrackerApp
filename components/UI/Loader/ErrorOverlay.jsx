import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../../constants/style';

const ErrorOverlay = ({message,onConfirm}) => {
  return (
    <View style={styles.container}>
    
      <Text style={[styles.text,styles.title]}>An Error Occured</Text>
      <Text style={styles.text}>{message}</Text>
      <Button title='Close' onPress={onConfirm}/>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    // backgroundColor: 'rgba(0,0,0,0.15)',

  },
  text:{
    color:'white',
    textAlign:'center',
    marginBottom: 8,
  },
  title:{

    fontSize: 20,
    fontWeight:'bold'
  },
  message:{

  }

});
