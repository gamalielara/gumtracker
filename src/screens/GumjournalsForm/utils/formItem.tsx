import Checkbox from "expo-checkbox";
import { FORMS, FormType, THabits, THabitsGami } from "../../../utils/forms";
import {
  CheckboxViewContainer,
  MultiRadioGridContainer,
  MultiRadioGridQuestion,
  QuestionContainer,
  QuestionText,
  ScrollableHorizontalView,
} from "../styles";
import { APPCOLORSCHEME } from "../../../utils/const";
import { BaseText } from "../../../components/global/text";
import { Dimensions, FlatList, ScrollView, View } from "react-native";
import React, { useMemo } from "react";
import RadioButtonsGroup from "react-native-radio-buttons-group";

interface IFormItemProps {
  questionTitle: string;
  value?:
    | string
    | boolean
    | number
    | ((...args: any) => boolean | number | string);
  callbackFunc?: (...args: any) => void;
}

type TSelectForm = Omit<THabits, "type"> & IFormItemProps;
type TRadioGridForm = Omit<THabitsGami, "type"> & IFormItemProps;

export const SelectForm: React.FC<TSelectForm> = React.memo(
  (props) => {
    const { questionTitle, options, callbackFunc, value } = props;

    const renderCheckbox = ({ item }: { item: string }) => {
      const isSelected = (value as Function)?.(item);

      return (
        <CheckboxViewContainer
          onPress={() =>
            callbackFunc?.({
              isChangedSelected: !isSelected,
              habit: item,
            })
          }
        >
          <Checkbox
            color={APPCOLORSCHEME.card}
            //@ts-ignore
            value={isSelected}
            onValueChange={(e) => {
              callbackFunc?.({ isChangedSelected: e, habit: item });
            }}
          />
          <BaseText>{item}</BaseText>
        </CheckboxViewContainer>
      );
    };

    return (
      <QuestionContainer>
        <QuestionText>{questionTitle}</QuestionText>

        <FlatList
          data={options}
          keyExtractor={() => String(Math.random())}
          renderItem={renderCheckbox}
        />
      </QuestionContainer>
    );
  },
  (prev, next) => prev.value === next.value
);

export const RadioGridForm: React.FC<TRadioGridForm> = React.memo(
  (props) => {
    const { questionTitle, scale, value, columns, callbackFunc } = props;

    const [scaleFrom, scaleTo] = scale;

    const radioButtons = useMemo(() => {
      const scaleMap = Array.from(
        { length: scaleTo - scaleFrom + 1 },
        (_, i) => scaleFrom + i
      );

      return scaleMap.map((_, i) => ({
        id: String(Math.random()),
        label: String(i),
        value: String(i),
        borderColor: APPCOLORSCHEME.card,
        color: APPCOLORSCHEME.text,
        labelStyle: {
          color: APPCOLORSCHEME.text,
        },
      }));
    }, []);

    const constRadioSelected = (name: string, id: string) => {
      const selectedHabitScore = radioButtons.filter(
        (radio) => radio.id === id
      )[0].label;

      callbackFunc?.({ habit: name, score: selectedHabitScore });
    };

    const renderRadioButton = ({ item }: { item: string }) => {
      const thisHabitValue = String((value as Function)(item) as number);

      const selectedId = radioButtons.filter(
        (radio) => radio.value === thisHabitValue
      )[0].id;

      return (
        <MultiRadioGridContainer>
          <MultiRadioGridQuestion>{item}</MultiRadioGridQuestion>
          <ScrollableHorizontalView horizontal>
            <RadioButtonsGroup
              radioButtons={radioButtons}
              onPress={(id) => constRadioSelected(item, id)}
              selectedId={selectedId}
              layout="row"
              containerStyle={{
                width: Dimensions.get("window").width,
                justifyContent: "space-around",
                gap: 20,
                height: 50,
              }}
            />
          </ScrollableHorizontalView>
        </MultiRadioGridContainer>
      );
    };

    return (
      <QuestionContainer>
        <QuestionText>{questionTitle}</QuestionText>
        <FlatList
          data={columns}
          renderItem={renderRadioButton}
          keyExtractor={() => String(Math.random())}
        />
      </QuestionContainer>
    );
  },
  (prev, next) => prev.value === next.value
);
