
import ManageExpenses from "../screens/ManageExpenses";
import { navigation_names } from "../utils/Navigations/constants";
import ExpensesOverview from "./ExpensesOverview/ExpensesOverview";

export const stackNavigation = [{
    name: navigation_names.ExpenseOverview,
    component: ExpensesOverview,
    options:{
        headerShown: false
    }
},
{
    name: navigation_names.ManageExpense,
    component: ManageExpenses,
    options:{

        presentation:'modal'
    }
}
]