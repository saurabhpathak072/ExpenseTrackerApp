import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/style';

const ExpenseItem = ({ description, amount, date }) => {
  return (
    <View style={styles.expenseItem}>
      <View >
        <Text style={[styles.textBase,styles.description]}>{description}</Text>
        <Text style={styles.textBase}>{date.toString()}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
    expenseItem:{
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:8,
        elevation: 6,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset:{width:1,height:4},
        shadowOpacity: 0.7,
        shadowRadius:8
    },
    textBase:{
        color:GlobalStyles.colors.primary50
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold'
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
       alignItems:'center',
       borderRadius:4
    },
    amount:{
        fontWeight:'bold',
        color:GlobalStyles.colors.primary500
    }
});
