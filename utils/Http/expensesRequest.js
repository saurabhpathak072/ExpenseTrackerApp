import axios from "axios"

const BASE_URL = 'https://react-nativa-app-expense-trac-default-rtdb.firebaseio.com/'

export const storeExpense=async (expenses)=>{
   const {data}= await axios.post(BASE_URL + 'expenses.json',expenses);
   const id = data.name;
   return id;
}

export const fetchExpenses = async () =>{
    const response = await axios.get(BASE_URL + 'expenses.json');

    const expenses = [];
console.log(response.data);
    for(let key in response.data) {
        const expenseObj={
            id:key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expenseObj);
    }

    return expenses;
}