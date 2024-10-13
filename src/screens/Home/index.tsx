import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OverallScreen from '../OverallScreen';
import TabBar from './TabBar';
import WeeklyScreen from '<screens>/WeeklyScreen';
import DailyScreen from '<screens>/DailyScreen';
import { HomeScreenNames, LightModeColorScheme } from '<utils>/const';

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={() => ({
        lazy: true,
        unmountOnBlur: true,
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
