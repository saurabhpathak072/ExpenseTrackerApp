import ExpensesOverview from "../components/ExpensesOverview/ExpensesOverview";
import ManageExpenses from "../screens/ManageExpenses";
import { navigation_names } from "../utils/Navigations/constants";

export const stackNavigation = [{
    name: navigation_names.ExpenseOverview,
    component: ExpensesOverview,

},
{
    name: navigation_names.ManageExpense,
    component: ManageExpenses,

}
]