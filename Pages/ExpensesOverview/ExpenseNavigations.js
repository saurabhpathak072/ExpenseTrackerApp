import AllExpenses from '../../screens/AllExpenses';
import RecentExpenses from '../../screens/RecentExpenses';
import { navigation_names } from '../../utils/Navigations/constants';

import { Ionicons } from '@expo/vector-icons';

export const bottomTabNavigation = [
  {
    name: navigation_names.RecentExpenses,
    component: RecentExpenses,
    options: {
      title: 'Recent Expenses',
      tabBarLabel: 'Recent',
      tabBarIcon: ({ color, size }) => {
        return (
          <Ionicons
            name="hourglass"
            color={color}
            size={size}
          />
        );
      },
    },
  },
  {
    name: navigation_names.AllExpenses,
    component: AllExpenses,
    options: {
        title: 'All Expenses',
        tabBarLabel: 'All',
        tabBarIcon: ({ color, size }) => {
          return (
            <Ionicons
              name="calendar"
              color={color}
              size={size}
            />
          );
        },
      },
  },
];
