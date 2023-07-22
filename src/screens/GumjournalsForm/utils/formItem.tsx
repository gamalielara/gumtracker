import Checkbox from "expo-checkbox";
import { FORMS, FormType } from "../../../utils/forms";
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

type k = keyof typeof FORMS;

interface IFormItemProps {
  form: (typeof FORMS)[k][0];
  value?: string | boolean | ((...args: any) => boolean);
  callbackFunc?: (...args: any) => void;
}

export const FormItem: React.FC<IFormItemProps> = (props) => {
  const { form, value, callbackFunc } = props;
  const [formQuestionName, formConfig] = Object.entries(form)[0];

  const FormBody = useCallback(() => {
    switch ((formConfig as any).type) {
      case FormType.MULTISELECT:
        return (
          <>
            {(formConfig.options as string[]).map((option) => {
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
        const [scaleFrom, scaleTo] = formConfig.scale;

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

        return formConfig.columns.map((column: string) => (
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
        ));

      default:
        return <></>;
    }
  }, [value]);

  return (
    <QuestionContainer>
      <QuestionText>{formQuestionName}</QuestionText>
      <FormBody />
    </QuestionContainer>
  );
};
