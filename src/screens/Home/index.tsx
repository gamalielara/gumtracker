import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreenNames } from '../../utils/const';
import OverallScreen from '../OverallScreen';
import { faHome, faInbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon = faInbox;

          switch (route.name) {
            case HomeScreenNames.OVERALL:
              icon = faHome;
              break;
            default:
              break;
          }

          return <FontAwesomeIcon icon={icon} />;
        },
      })}>
      <Tab.Screen
        name={HomeScreenNames.OVERALL}
        component={OverallScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
