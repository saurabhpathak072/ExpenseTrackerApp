import AllExpenses from "../../screens/AllExpenses";
import RecentExpenses from "../../screens/RecentExpenses";
import { navigation_names } from "../../utils/Navigations/constants";

export const bottomTabNavigation = [{
    name: navigation_names.RecentExpenses,
    component: RecentExpenses,

},
{
    name: navigation_names.AllExpenses,
    component: AllExpenses,

}
]