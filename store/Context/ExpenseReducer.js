const expenseReducer = (state, action) =>{
    switch (action.type) {
        case 'SET':
            return action.payload;
        case 'ADD':
            return [{...action.payload}, ...state];
        case 'DELETE':
            return state.filter((expense)=>expense.id !== action.payload)
            break;
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense)=>expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedExpense = {...updatableExpense, ...action.payload.data};
            const updateExpenses = [...state];
            updateExpenses[updatableExpenseIndex] = updatedExpense;
            return updateExpenses;
    
        default:
            return state;
    }
};

export default expenseReducer;