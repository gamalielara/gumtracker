import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  GumjournalsContainerView,
  GumjournalsTitleText,
  Header,
  TabBarLabelStyle,
  TabBarStyle,
  TabIcon,
} from "./styles";
import BackButton from "../../components/global/BackButton";
import {
  SafeAreaApp,
  VisuallyInvisible,
} from "../../components/global/container";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as SolidFontAwesome from "@fortawesome/free-solid-svg-icons/";
import * as RegularFontAwesome from "@fortawesome/free-regular-svg-icons";
import { APPCOLORSCHEME } from "../../utils/const";
import { useSafeAreaInsets } from "react-native-safe-area-context";

enum GumjournalSection {
  OVERVIEW,
  WELLBEING,
  HABIT,
}

const GumjournalsForm: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const insets = useSafeAreaInsets();

  const tabBarCustomOptions = ({ route }: any) => ({
    tabBarIcon: ({ focused, color, size }: any) => {
      switch (route.name) {
        case "Overview":
          return (
            <FontAwesomeIcon
              size={24}
              icon={
                (focused ? SolidFontAwesome : RegularFontAwesome).faNoteSticky
              }
              color={
                focused ? APPCOLORSCHEME.text : APPCOLORSCHEME["text-secondary"]
              }
            />
          );
        case "Wellbeing":
          return (
            <FontAwesomeIcon
              size={24}
              icon={
                (focused ? SolidFontAwesome : RegularFontAwesome)
                  .faFaceLaughWink
              }
              color={
                focused ? APPCOLORSCHEME.text : APPCOLORSCHEME["text-secondary"]
              }
            />
          );

        case "Habit":
          return (
            <FontAwesomeIcon
              size={24}
              icon={SolidFontAwesome.faTableTennisPaddleBall}
              color={
                focused ? APPCOLORSCHEME.text : APPCOLORSCHEME["text-secondary"]
              }
            />
          );
        default:
          break;
      }
    },
    headerShown: false,
    tabBarActiveTintColor: APPCOLORSCHEME.text,
    tabBarInactiveTintColor: APPCOLORSCHEME["text-secondary"],
    tabBarStyle: TabBarStyle(insets).tabBar,
  });

  return (
    <>
      <SafeAreaApp>
        <GumjournalsContainerView>
          <Header>
            <BackButton />
            <GumjournalsTitleText>gumjournals form</GumjournalsTitleText>
            <VisuallyInvisible />
          </Header>

          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Hello"
              screenOptions={tabBarCustomOptions}
            >
              <Tab.Screen
                options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
                component={() => <></>}
                name="Overview"
              />
              <Tab.Screen
                options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
                component={() => <></>}
                name="Wellbeing"
              />
              <Tab.Screen
                options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
                component={() => <></>}
                name="Habit"
              />
            </Tab.Navigator>
          </NavigationContainer>
        </GumjournalsContainerView>
      </SafeAreaApp>
    </>
  );
};

const TabIconComponent = (props: any, children: any) => (
  <TabIcon {...props}>{children}</TabIcon>
);

export default GumjournalsForm;
