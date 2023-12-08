import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/style';
import { getFormattedDate } from '../../utils/Date/date';
import { useNavigation } from '@react-navigation/native';
import { navigation_names } from '../../utils/Navigations/constants';

const ExpenseItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();
  const expensePressHandler=()=>{
     navigation.navigate(navigation_names.ManageExpense,{
      expenseId:id
     });
  }
  return (
    <Pressable android_ripple={{color:'#ccc'}} style={({pressed})=>pressed && styles.pressed} onPress={expensePressHandler}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed:{
    opacity: 0.75
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    elevation: 6,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});
