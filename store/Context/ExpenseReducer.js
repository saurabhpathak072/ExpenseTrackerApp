const expenseReducer = (state, action) =>{
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + (Math.random() * 10)
            return [{...action.payload, id}, ...state];
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