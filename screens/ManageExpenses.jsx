import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconButton from '../components/UI/Buttons/IconButton';
import { GlobalStyles } from '../constants/style';
import CustomButtons from '../components/UI/Buttons/CustomButtons';

const ManageExpenses = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  const editExpenseId = params?.expenseId;
  const isEditing = !!editExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    navigation.goBack();
  };

  const cancelExpenseHandler = () =>{
    navigation.goBack();
  }
  
  const confirmExpenseHandler = () =>{
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text>ManageExpenses</Text>
      <View style={styles.buttons}>

      <CustomButtons style={styles.button} mode='flat' onPress={cancelExpenseHandler}>Cancel</CustomButtons>
      <CustomButtons style={styles.button} onPress={confirmExpenseHandler}> {isEditing ? 'Update' : 'Add'}</CustomButtons>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            color={GlobalStyles.colors.error500}
            icon={'trash'}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 24,
    paddingTop: 8,
    borderTopColor: GlobalStyles.colors.primary200,
    borderTopWidth: 2,
    alignItems: 'center',
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    minWidth: 120,
    marginHorizontal: 8
  }
});
