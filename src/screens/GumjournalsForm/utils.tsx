import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as SolidFontAwesome from "@fortawesome/free-solid-svg-icons/";
import * as RegularFontAwesome from "@fortawesome/free-regular-svg-icons";
import { APPCOLORSCHEME } from "../../utils/const";
import {
  CheckboxViewContainer,
  FormInput,
  QuestionContainer,
  QuestionText,
  TabBarStyle,
} from "./styles";
import React, { useMemo } from "react";
import { FORMS, FormType } from "../../utils/forms";
import { View } from "react-native";
import { BaseText } from "../../components/global/text";
import Checkbox from "expo-checkbox";

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
  tabBarHideOnKeyboard: true,
});

type k = keyof typeof FORMS;
interface IFormItemProps {
  form: (typeof FORMS)[k][0];
  value?: string | boolean | ((...args: any) => boolean);
  callbackFunc?: (...args: any) => void;
}
export const FormItem: React.FC<IFormItemProps> = (props) => {
  const { form, value, callbackFunc } = props;
  const [formQuestionName, formConfig] = Object.entries(form)[0];

  const FormBody = () => {
    switch ((formConfig as any).type) {
      case FormType.MULTISELECT:
        return (
          <>
            {(formConfig.options as string[]).map((option) => {
              return (
                <CheckboxViewContainer key={option}>
                  <>
                    <Checkbox
                      color={APPCOLORSCHEME.card}
                      //@ts-ignore
                      value={value(option)}
                      onValueChange={(e) => {
                        callbackFunc?.({ isSelected: e, habit: option });
                      }}
                    />
                    <BaseText>{option}</BaseText>
                  </>
                </CheckboxViewContainer>
              );
            })}
          </>
        );

      default:
        return <></>;
    }
  };

  return (
    <QuestionContainer>
      <QuestionText>{formQuestionName}</QuestionText>
      <FormBody />
    </QuestionContainer>
  );
};
