import Checkbox from "expo-checkbox";
import { THabitsGami } from "../../../utils/forms";
import {
  CheckboxViewContainer,
  MultiRadioGridContainer,
  MultiRadioGridQuestion,
  QuestionContainer,
  QuestionText,
  ScrollableHorizontalView,
} from "../styles";
import { BaseText } from "../../../components/global/text";
import { Dimensions, FlatList } from "react-native";
import React, { useContext, useMemo } from "react";
import RadioButtonsGroup from "react-native-radio-buttons-group";
import CommonContext from "../../../module/common";

type TForm = {
  select: string[];
  grid_radio: Record<string, number>;
};

interface IFormItemProps {
  questionTitle: string;
  callbackFunc?: (...args: any) => void;
}

type IFormItemOpt<T extends keyof TForm> = IFormItemProps & {
  value: TForm[T];
};

type TRadioGridForm = Omit<THabitsGami, "type"> & IFormItemOpt<"grid_radio">;

interface IRadioButton {
  item: string;
  value: Record<string, number>;
  scaleFrom: number;
  scaleTo: number;
  callbackFunc?: (...args: any) => void;
}

// React memo is used to enhance performance. We don't want to rerender forms that was not previously changed
// If we change a form there's a chance for other form to rerender as well
export const SelectForm: React.FC<any> = React.memo(
  (props) => {
    const { colorScheme } = useContext(CommonContext);

    const { questionTitle, options, callbackFunc, value } = props;

    const renderCheckbox = ({ item }: { item: string }) => {
      const isSelected = value.includes(item);

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
            color={colorScheme.card}
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
  (prev, next) => JSON.stringify(prev.value) === JSON.stringify(next.value),
);

const RadioBtn = React.memo(
  ({ item, value, scaleFrom, scaleTo, callbackFunc }: IRadioButton) => {
    const { colorScheme } = useContext(CommonContext);

    const radioButtons = useMemo(() => {
      const scaleMap = Array.from(
        { length: scaleTo - scaleFrom + 1 },
        (_, i) => scaleFrom + i,
      );

      return scaleMap.map((_, i) => ({
        id: String(Math.random()),
        label: String(i),
        value: String(i),
        borderColor: colorScheme.card,
        color: colorScheme.text,
        labelStyle: {
          color: colorScheme.text,
        },
      }));
    }, []);

    const onRadioSelected = (name: string, id: string) => {
      const selectedHabitScore = radioButtons.filter(
        (radio) => radio.id === id,
      )[0].label;

      callbackFunc?.({ habit: name, score: selectedHabitScore });
    };

    const thisHabitValue = value[item];

    const selectedId = useMemo(
      () =>
        radioButtons.filter(
          (radio) => radio.value === String(thisHabitValue),
        )[0]?.id,
      [thisHabitValue],
    );

    return (
      <MultiRadioGridContainer>
        <MultiRadioGridQuestion>{item}</MultiRadioGridQuestion>
        <ScrollableHorizontalView horizontal>
          <RadioButtonsGroup
            radioButtons={radioButtons}
            onPress={(id) => onRadioSelected(item, id)}
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
  },
);

export const RadioGridForm: React.FC<TRadioGridForm> = React.memo(
  (props) => {
    const { questionTitle, scale, value, columns, callbackFunc } = props;

    const [scaleFrom, scaleTo] = scale;

    return (
      <QuestionContainer>
        <QuestionText>{questionTitle}</QuestionText>
        <FlatList
          data={columns}
          renderItem={({ item }) => (
            <RadioBtn
              scaleFrom={scaleFrom}
              scaleTo={scaleTo}
              value={value}
              item={item}
              callbackFunc={callbackFunc}
            />
          )}
          keyExtractor={(item) => item}
        />
      </QuestionContainer>
    );
  },
  (prev, next) => JSON.stringify(prev.value) === JSON.stringify(next.value),
);
