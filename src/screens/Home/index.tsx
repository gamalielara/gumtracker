import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreenNames, LightModeColorScheme } from '../../utils/const';
import OverallScreen from '../OverallScreen';
import {
  faCalendar,
  faClock,
  faInbox,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import WeeklyScreen from '../WeeklyScreen';
import DailyScreen from '../DailyScreen';
import TabBar from './TabBar';
import { BlurView } from '@react-native-community/blur';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon = faInbox;

          switch (route.name) {
            case HomeScreenNames.OVERALL:
              icon = faList;
              break;
            case HomeScreenNames.WEEKLY:
              icon = faCalendar;
              break;
            case HomeScreenNames.DAILY:
              icon = faClock;
              break;
            default:
              break;
          }

          return (
            <FontAwesomeIcon
              icon={icon}
              color={LightModeColorScheme[focused ? 'primary' : 'secondary']}
            />
          );
        },
        freezeOnBlur: true,
      })}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={HomeScreenNames.DAILY}
        component={DailyScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name={HomeScreenNames.WEEKLY}
        component={WeeklyScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={HomeScreenNames.OVERALL}
        component={OverallScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
