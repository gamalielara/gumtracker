import { useEffect, useMemo, useRef, useState } from "react";
import { IFormCard } from "../../../utils/interface";
import Component from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheck,
  faChevronDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ColorScheme } from "../../../utils/const";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";
import { FlatList, TextInput } from "react-native";
import { faker } from "@faker-js/faker";
import { useSelector } from "react-redux";
import { getGumjournalsSelectedDate } from "../../../module/gumjournals/selectors";

interface IProps extends IFormCard {
  inputType: "number" | "text";
  textInputPlaceHolder: string;
  filledData: string[] | string;
}

const SELECT_BOX_DEFAULT_HEIGHT = 75;

const InputFormCard: React.FC<IProps> = (props) => {
  const selectedGumjournalsData = useSelector(getGumjournalsSelectedDate);
  const [isCTAButtonClicked, setIsCTAButtonClicked] = useState(false);

  const textToInput = useRef<string>();

  const {
    title,
    subtitle,
    SVGImage,
    illustrationPosition,
    additionIllustrationStyle,
    filledData,
    inputType,
    textInputPlaceHolder,
  } = props;

  const shouldHasMultipleData = Array.isArray(filledData);

  const isFilled = shouldHasMultipleData
    ? filledData.length > 0
    : Boolean(filledData);

  const CTAButtonIcon = isFilled ? faChevronDown : faPlus;

  const boxHeightAnim = useSharedValue(0);

  const animatedTextInputContainerStyle = useAnimatedStyle(() => ({
    height: boxHeightAnim.value,
  }));

  const onCTAButtonClick = () => {
    setIsCTAButtonClicked((state) => !state);
  };

  const onAddTextHandler = () => {};

  useEffect(() => {
    if (isCTAButtonClicked) {
      const num = filledData.length > 0 ? Math.min(filledData.length, 4) : 1;
      boxHeightAnim.value = withSpring(SELECT_BOX_DEFAULT_HEIGHT * num);
    } else {
      boxHeightAnim.value = withTiming(0);
    }
  }, [isCTAButtonClicked]);

  useEffect(() => {
    setIsCTAButtonClicked(isFilled);
  }, [selectedGumjournalsData]);

  const filledDataBox = useMemo(() => {
    if (!isFilled) return null;

    if (shouldHasMultipleData) {
      return (
        <ScrollView>
          <FlatList
            data={filledData}
            keyExtractor={() => faker.string.uuid()}
            renderItem={({ item: filledDataText }) => {
              return (
                <Component.FilledDataBox>
                  <Component.FilledDataText>
                    {filledDataText}
                  </Component.FilledDataText>
                </Component.FilledDataBox>
              );
            }}
          />
        </ScrollView>
      );
    } else {
      <Component.FilledDataBox>
        <Component.FilledDataText>{filledData}</Component.FilledDataText>
      </Component.FilledDataBox>;
    }
  }, [filledData]);

  return (
    <>
      <Component.Card position={illustrationPosition}>
        <Component.IllustrationImage
          position={illustrationPosition}
          style={{ ...additionIllustrationStyle }}
        >
          <SVGImage />
        </Component.IllustrationImage>
        <Component.CardSide layoutPosition={illustrationPosition}>
          <Component.CardInfo>
            <Component.CardTitle>{title}</Component.CardTitle>
            {subtitle && (
              <Component.CardSubtitle>{subtitle}</Component.CardSubtitle>
            )}
          </Component.CardInfo>
          <Component.ActionButton onPress={onCTAButtonClick}>
            <FontAwesomeIcon
              icon={isCTAButtonClicked ? faCheck : CTAButtonIcon}
              color={ColorScheme["text-secondary"]}
            />
          </Component.ActionButton>
        </Component.CardSide>
      </Component.Card>

      <Animated.View
        style={[{ overflow: "hidden" }, animatedTextInputContainerStyle]}
      >
        <Component.SubmitTextInputContainer>
          <Component.TextInput
            placeholder={textInputPlaceHolder}
            onChangeText={(text) => {
              textToInput.current = text;
            }}
            keyboardType={inputType === "number" ? "numeric" : "default"}
          />
          <Component.AddButton onPress={onAddTextHandler}>
            <FontAwesomeIcon
              icon={faPlus}
              color={ColorScheme["text-secondary"]}
            />
          </Component.AddButton>
        </Component.SubmitTextInputContainer>

        {filledDataBox}
      </Animated.View>
    </>
  );
};

export default InputFormCard;
