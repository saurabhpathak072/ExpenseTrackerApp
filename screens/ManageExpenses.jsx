import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconButton from '../components/UI/Buttons/IconButton';
import { GlobalStyles } from '../constants/style';
import CustomButtons from '../components/UI/Buttons/CustomButtons';
import { ExpenseCtx } from '../store/Context/ExpenseContext';

const ManageExpenses = () => {
  const { addExpense, updateExpense, deleteExpense } = useContext(ExpenseCtx);
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
    deleteExpense(editExpenseId);
    navigation.goBack();
  };

  const cancelExpenseHandler = () => {
    navigation.goBack();
  };

  const confirmExpenseHandler = () => {
    if (isEditing) {
      updateExpense(editExpenseId, {
        date: new Date(),
        description: 'Test!!!!!',
        amount: 29.99,
      });
    } else {
      console.log('Add');
      addExpense({
        date: new Date(),
        amount: 19.99,
        description: 'Test',
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>ManageExpenses</Text>
      <View style={styles.buttons}>
        <CustomButtons
          style={styles.button}
          mode="flat"
          onPress={cancelExpenseHandler}
        >
          Cancel
        </CustomButtons>
        <CustomButtons
          style={styles.button}
          onPress={confirmExpenseHandler}
        >
          {' '}
          {isEditing ? 'Update' : 'Add'}
        </CustomButtons>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
