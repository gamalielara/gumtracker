import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  GumjournalsContainerView,
  GumjournalsTitleText,
  Header,
  TabBarLabelStyle,
} from "./styles";
import BackButton from "../../components/global/BackButton";
import {
  SafeAreaApp,
  VisuallyInvisible,
} from "../../components/global/container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tabBarCustomOptions } from "./utils";
import { View } from "react-native";
import OverviewForm from "./OverviewForm";
import { GumjournalsContextProvider } from "../../module/GumjournalsForm/context";

enum GumjournalSection {
  OVERVIEW,
  WELLBEING,
  HABIT,
}

const GumjournalsForm: React.FC = () => {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  return (
    <GumjournalsContextProvider>
      <SafeAreaApp
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        }}
      >
        <GumjournalsContainerView>
          <Header>
            <BackButton />
            <GumjournalsTitleText>gumjournals form</GumjournalsTitleText>
            <VisuallyInvisible />
          </Header>

          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Hello"
              screenOptions={({ route }) => tabBarCustomOptions(route, insets)}
            >
              <Tab.Screen
                options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
                component={() => <OverviewForm />}
                name="Overview"
              />
              <Tab.Screen
                options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
                component={() => <View />}
                name="Wellbeing"
              />
              <Tab.Screen
                options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
                component={() => <View />}
                name="Habit"
              />
            </Tab.Navigator>
          </NavigationContainer>
        </GumjournalsContainerView>
      </SafeAreaApp>
    </GumjournalsContextProvider>
  );
};

export default GumjournalsForm;
