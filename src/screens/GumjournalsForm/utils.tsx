import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as SolidFontAwesome from "@fortawesome/free-solid-svg-icons/";
import * as RegularFontAwesome from "@fortawesome/free-regular-svg-icons";
import { APPCOLORSCHEME } from "../../utils/const";
import { TabBarStyle } from "./styles";

export const tabBarCustomOptions = (route: any, insets: any) => ({
  tabBarIcon: ({ focused, color, size }: any) => {
    switch (route.name) {
      case "Overview":
        return (
          <FontAwesomeIcon
            size={size}
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
            size={size}
            icon={
              (focused ? SolidFontAwesome : RegularFontAwesome).faFaceLaughWink
            }
            color={
              focused ? APPCOLORSCHEME.text : APPCOLORSCHEME["text-secondary"]
            }
          />
        );

      case "Habit":
        return (
          <FontAwesomeIcon
            size={size}
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
