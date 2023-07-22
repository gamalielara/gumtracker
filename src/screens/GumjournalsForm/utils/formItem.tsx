import Checkbox from "expo-checkbox";
import { FORMS, FormType, THabits, THabitsGami } from "../../../utils/forms";
import {
  CheckboxViewContainer,
  MultiselectGridQuestion,
  QuestionContainer,
  QuestionText,
} from "../styles";
import { APPCOLORSCHEME } from "../../../utils/const";
import { BaseText } from "../../../components/global/text";
import { ScrollView, Text, View } from "react-native";
import { useCallback, useMemo } from "react";
import RadioButtonsGroup from "react-native-radio-buttons-group";

type KForms = keyof (typeof FORMS)[keyof typeof FORMS];

interface IFormItemProps {
  questionTitle: string;
  form: (typeof FORMS.habitsTracker)[KForms];
  value?: string | boolean | ((...args: any) => boolean);
  callbackFunc?: (...args: any) => void;
}

export const FormItem: React.FC<IFormItemProps> = (props) => {
  const { questionTitle, form: formConfig, value, callbackFunc } = props;

  const FormBody = useCallback(() => {
    switch (formConfig.type) {
      case FormType.MULTISELECT:
        return (
          <>
            {((formConfig as THabits).options as string[]).map((option) => {
              const isSelected = (value as Function)?.(option);

              return (
                <CheckboxViewContainer
                  key={option}
                  onPress={() =>
                    callbackFunc?.({
                      isChangedSelected: !isSelected,
                      habit: option,
                    })
                  }
                >
                  <Checkbox
                    color={APPCOLORSCHEME.card}
                    //@ts-ignore
                    value={isSelected}
                    onValueChange={(e) => {
                      callbackFunc?.({ isChangedSelected: e, habit: option });
                    }}
                  />
                  <BaseText>{option}</BaseText>
                </CheckboxViewContainer>
              );
            })}
          </>
        );

      case FormType.GRIDSELECT:
        const [scaleFrom, scaleTo] = (formConfig as THabitsGami).scale;

        const scaleMap = Array.from(
          { length: scaleTo - scaleFrom + 1 },
          (v, i) => scaleFrom + i
        );

        const radioButtons = useMemo(
          () =>
            scaleMap.map((_, i) => ({
              id: String(Math.random()),
              label: String(i),
              value: String(i),
              borderColor: APPCOLORSCHEME.card,
              labelStyle: {
                color: APPCOLORSCHEME.text,
              },
            })),
          []
        );

        return (
          <>
            {(formConfig as THabitsGami).columns.map((column: string) => (
              <View>
                <MultiselectGridQuestion>{column}</MultiselectGridQuestion>
                <ScrollView horizontal>
                  <RadioButtonsGroup
                    radioButtons={radioButtons}
                    onPress={callbackFunc}
                    selectedId={value as string}
                    layout="row"
                  />
                </ScrollView>
              </View>
            ))}
          </>
        );

      default:
        return <></>;
    }
  }, [value]);

  return (
    <QuestionContainer>
      <QuestionText>{questionTitle}</QuestionText>
      <FormBody />
    </QuestionContainer>
  );
};
