import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as SolidFontAwesome from "@fortawesome/free-solid-svg-icons/";
import * as RegularFontAwesome from "@fortawesome/free-regular-svg-icons";
import {
  ColorModeScheme,
  ColorScheme,
  GumjournalsFormName,
} from "../../../utils/const";
import { TabBarStyle } from "../styles";
import React from "react";
import { getAppColorScheme } from "../../../utils/getAppColorScheme";

let colorScheme = ColorModeScheme.LIGHT_MODE;
getAppColorScheme().then((color) => {
  if (color) colorScheme = color;
});

export const tabBarCustomOptions = (route: any, insets: any) => ({
  tabBarIcon: ({ focused, size }: any) => {
    switch (route.name) {
      case GumjournalsFormName.WELLBEING:
        return (
          <FontAwesomeIcon
            size={size}
            icon={
              (focused ? SolidFontAwesome : RegularFontAwesome).faFaceLaughWink
            }
            color={
              focused
                ? ColorScheme[colorScheme].text
                : ColorScheme[colorScheme]["text-secondary"]
            }
          />
        );

      case GumjournalsFormName.FITNESS:
        return (
          <FontAwesomeIcon
            size={size}
            icon={(focused ? SolidFontAwesome : RegularFontAwesome).faHeart}
            color={
              focused
                ? ColorScheme[colorScheme].text
                : ColorScheme[colorScheme]["text-secondary"]
            }
          />
        );

      case GumjournalsFormName.HABIT:
        return (
          <FontAwesomeIcon
            size={size}
            icon={SolidFontAwesome.faTableTennisPaddleBall}
            color={
              focused
                ? ColorScheme[colorScheme].text
                : ColorScheme[colorScheme]["text-secondary"]
            }
          />
        );
      default:
        break;
    }
  },
  headerShown: false,
  tabBarActiveTintColor: ColorScheme[colorScheme].text,
  tabBarInactiveTintColor: ColorScheme[colorScheme]["text-secondary"],
  tabBarStyle: TabBarStyle(insets).tabBar,
  tabBarHideOnKeyboard: true,
});
