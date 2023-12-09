import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from './Input';
import { getFormattedDate } from '../../utils/Date/date';
import CustomButtons from '../UI/Buttons/CustomButtons';
import { GlobalStyles } from '../../constants/style';

const ExpenseForm = ({ defaultValue, submitLabel, onCancel, onSubmit }) => {
  const [inputValue, setInputValue] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValue ? getFormattedDate(defaultValue.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description : '',
      isValid: true,
    },
  });
  const onInputChangeHandler = (inputProperty, inputValue) => {
    setInputValue((prevInputValue) => {
      return {
        ...prevInputValue,
        [inputProperty]:{
          value:inputValue,
          isValid: true,
        } ,
      };
    });
  };

  const isFormInvalid = !inputValue.amount.isValid || !inputValue.date.isValid || !inputValue.description.isValid

  const onSubmitHandler = () => {
    const expenseData = {
      amount: +inputValue.amount.value,
      date: new Date(inputValue.date.value),
      description: inputValue.description.value,
    };
    const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isDateValid =
      expenseData?.date?.toString()?.toLowerCase() !==
      'Invalid Date'.toLowerCase();
    const isValidDescription = expenseData?.description?.trim()?.length > 0;
    if (!isAmountValid || !isDateValid || !isValidDescription) {
      // Alert.alert('Invalid Input', 'Check and Enter Valid Input');
      setInputValue((currentInputValue)=>{
        return{
          amount:{...currentInputValue.amount, isValid:isAmountValid},
          date:{...currentInputValue.date, isValid:isDateValid},
          description:{...currentInputValue.description, isValid:isValidDescription},
        }
      })
      return;
    }
    onSubmit(expenseData);
  };
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label={'Amount'}
          isInValid={!inputValue.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            value: inputValue.amount.value,
            onChangeText: onInputChangeHandler.bind(this, 'amount'),
          }}
        />
        <Input
          style={styles.rowInput}
          label={'Date'}
          isInValid={!inputValue.date.isValid}
          textInputConfig={{
            placeholder: 'yyyy-mm-dd',
            maxLength: 10,
            value: inputValue.date.value,
            onChangeText: onInputChangeHandler.bind(this, 'date'),
          }}
        />
      </View>
      <Input
        label={'description'}
        isInValid={!inputValue.description.isValid}
        textInputConfig={{
          multiline: true,
          value: inputValue.description.value,
          onChangeText: onInputChangeHandler.bind(this, 'description'),
          // autoCapitalize: 'none',
          // autoCorrect: false  // default is true
        }}
      />
      {isFormInvalid && <Text style={styles.errorText}>Form is Invalid</Text>}
      <View style={styles.buttons}>
        <CustomButtons
          style={styles.button}
          mode="flat"
          onPress={onCancel}
        >
          Cancel
        </CustomButtons>
        <CustomButtons
          style={styles.button}
          onPress={onSubmitHandler}
        >
          {submitLabel}
        </CustomButtons>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 24,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
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
  invalidLabel: {
    color: GlobalStyles.colors.error500
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50
  }
});
