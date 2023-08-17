import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GumjournalsContainerView, TabBarLabelStyle } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tabBarCustomOptions } from "./utils/tabBarCustomOptions";
import { GumjournalsContextProvider } from "../../module/gumjournalsForm/context";
import HabitsForm from "./HabitsForm";
import {
  APPCOLORSCHEME,
  GumjournalsFormName,
  ScreenNames,
} from "../../utils/const";
import WellbeingForm from "./WellbeingForm";
import FitnessForm from "./FitnessForm";
import HeaderBar from "../../components/global/HeaderBar";
import { Dimensions } from "react-native";
import { IGumjournalsFormState } from "../../module/gumjournalsForm/interface";
import { NavigationScreenProps } from "../../utils/interface";

interface GumjournalsFormProps {
  valuesToShow: IGumjournalsFormState;
}

type Props = NavigationScreenProps<Partial<GumjournalsFormProps>>;

const GumjournalsForm: React.FC<Props> = ({
  valuesToShow,
  navigation,
}: Props) => {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  const screenHeight = Dimensions.get("window").height - insets.bottom;

  return (
    <GumjournalsContextProvider valuesToShow={valuesToShow}>
      <GumjournalsContainerView height={screenHeight}>
        <HeaderBar
          title={ScreenNames.GUMJOURNALS_FORM}
          navigation={navigation}
        />
        <NavigationContainer independent={true}>
          <Tab.Navigator
            initialRouteName={GumjournalsFormName.WELLBEING}
            screenOptions={({ route }) => tabBarCustomOptions(route, insets)}
            sceneContainerStyle={{
              backgroundColor: APPCOLORSCHEME.background,
              paddingLeft: insets.left + 10,
              paddingRight: insets.right + 10,
              paddingBottom: 10,
            }}
          >
            <Tab.Screen
              options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
              component={WellbeingForm}
              name={GumjournalsFormName.WELLBEING}
            />
            <Tab.Screen
              options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
              component={FitnessForm}
              name={GumjournalsFormName.FITNESS}
              listeners={{
                tabPress: () => {
                  if (new Date().getDay() !== 1) {
                    globalThis.showInfoToast(
                      "Fitness tracker only available on Monday",
                    );
                  }
                },
              }}
            />
            <Tab.Screen
              options={{ tabBarLabelStyle: TabBarLabelStyle.tabBarLabel }}
              component={HabitsForm}
              name={GumjournalsFormName.HABIT}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </GumjournalsContainerView>
    </GumjournalsContextProvider>
  );
};

export default GumjournalsForm;
