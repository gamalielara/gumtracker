import { useEffect, useRef, useState } from "react";
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

interface IProps extends IFormCard {
  inputType: "number" | "text";
  textInputPlaceHolder: string;
  filledData: string[];
}

const SELECT_BOX_DEFAULT_HEIGHT = 75;

const InputFormCard: React.FC<IProps> = (props) => {
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

  const CTAButtonIcon = Boolean(filledData.length) ? faChevronDown : faPlus;

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
      boxHeightAnim.value = withSpring(
        filledData.length > 1
          ? SELECT_BOX_DEFAULT_HEIGHT * 3
          : SELECT_BOX_DEFAULT_HEIGHT
      );
    } else {
      boxHeightAnim.value = withTiming(0);
    }
  }, [isCTAButtonClicked]);

  return (
    <>
      <Component.Card position={illustrationPosition}>
        <Component.IllustrationImage
          position={illustrationPosition}
          {...additionIllustrationStyle}
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

        {Boolean(filledData?.length) && (
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
        )}
      </Animated.View>
    </>
  );
};

export default InputFormCard;
