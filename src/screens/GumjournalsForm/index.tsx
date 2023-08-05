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
import { tabBarCustomOptions } from "./utils/tabBarCustomOptions";
import OverviewForm from "./OverviewForm";
import { GumjournalsContextProvider } from "../../module/GumjournalsForm/context";
import HabitsForm from "./HabitsForm";
import { APPCOLORSCHEME, GumjournalsFormName } from "../../utils/const";
import { Platform } from "react-native";
import WellbeingForm from "./WellbeingForm";
import { useRef } from "react";
import FitnessForm from "./FitnessForm";

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
        <GumjournalsContainerView
          enabled
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Header>
            <BackButton />
            <GumjournalsTitleText>gumjournals form</GumjournalsTitleText>
            <VisuallyInvisible />
          </Header>

          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Overview"
              screenOptions={({ route }) => tabBarCustomOptions(route, insets)}
              sceneContainerStyle={{
                backgroundColor: APPCOLORSCHEME.background,
                marginBottom: 65,
              }}
            >
              <Tab.Screen
                options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
                component={OverviewForm}
                name={GumjournalsFormName.OVERVIEW}
              />
              <Tab.Screen
                options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
                component={WellbeingForm}
                name={GumjournalsFormName.WELLBEING}
              />
              <Tab.Screen
                options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
                component={FitnessForm}
                name={GumjournalsFormName.FITNESS}
              />
              <Tab.Screen
                options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
                component={HabitsForm}
                name={GumjournalsFormName.HABIT}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </GumjournalsContainerView>
      </SafeAreaApp>
    </GumjournalsContextProvider>
  );
};

export default GumjournalsForm;
