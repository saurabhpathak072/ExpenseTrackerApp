import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconButton from '../components/UI/Buttons/IconButton';
import { GlobalStyles } from '../constants/style';
import CustomButtons from '../components/UI/Buttons/CustomButtons';
import { ExpenseCtx } from '../store/Context/ExpenseContext';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import {
  deleteExpenseRequest,
  storeExpense,
  updateExpenseRequest,
} from '../utils/Http/expensesRequest';
import LoaderOverlay from '../components/UI/Loader/LoaderOverlay';

const ManageExpenses = () => {
  const {
    expensesList,
    addExpense,
    updateExpense,
    deleteExpense,
    setIsLoading,
    isLoading,
  } = useContext(ExpenseCtx);
  const { params } = useRoute();
  const navigation = useNavigation();

  const editExpenseId = params?.expenseId;
  const isEditing = !!editExpenseId;

  const expense = expensesList.find((exp) => exp.id === editExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    setIsLoading(true);
    deleteExpenseRequest(editExpenseId)
      .then(() => {
        deleteExpense(editExpenseId);
        setIsLoading(false);
      })
      .catch((err) => {
        Alert.alert('Error', err.message);
        setIsLoading(false);
      });

    navigation.goBack();
  };

  const cancelExpenseHandler = () => {
    navigation.goBack();
  };

  const confirmExpenseHandler = async (expenseData) => {
    setIsLoading(true);
    if (isEditing) {
      updateExpenseRequest(editExpenseId, expenseData)
        .then((res) => {
          updateExpense(editExpenseId, expenseData);
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          Alert.alert('Error', err.message);
          setIsLoading(false);
        });
    } else {
      const id = await storeExpense(expenseData)
        .then(() => {
          addExpense({ ...expenseData, id: id });
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          Alert.alert('Error', err.message);
          setIsLoading(false);
        });
    }

    navigation.goBack();
  };

  if (isLoading) {
    return <LoaderOverlay />;
  }

  return (
    <View style={styles.container}>
      <View>
        <ExpenseForm
          defaultValue={expense}
          onSubmit={confirmExpenseHandler}
          onCancel={cancelExpenseHandler}
          submitLabel={isEditing ? 'Update' : 'Add'}
        />
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
});
