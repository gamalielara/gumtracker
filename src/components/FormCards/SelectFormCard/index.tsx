import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Component from "./styles";
import { FormOptions, IFormCard } from "../../../utils/interface";
import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState } from "react";
import { ColorScheme } from "../../../utils/const";
import {
  faCheck,
  faChevronDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getGumjournalsSelectedDate } from "../../../module/gumjournals/selectors";

interface IProps extends IFormCard {
  options: FormOptions[];
  filledData: string | number | null;
}

const SELECT_BOX_DEFAULT_HEIGHT = 100;

const SelectFormCard: React.FC<IProps> = (props) => {
  const selectedDate = useSelector(getGumjournalsSelectedDate);

  const [isCTAButtonClicked, setIsCTAButtonClicked] = useState(false);

  const {
    options,
    filledData,
    title,
    subtitle,
    SVGImage,
    illustrationPosition,
    additionIllustrationStyle,
  } = props;

  const boxHeightAnim = useSharedValue(0);

  const animatedTextInputContainerStyle = useAnimatedStyle(() => ({
    height: boxHeightAnim.value,
  }));

  const onCTAButtonClick = () => {
    setIsCTAButtonClicked((state) => !state);
  };

  useEffect(() => {
    setIsCTAButtonClicked(Boolean(filledData));
  }, [selectedDate, filledData]);

  useEffect(() => {
    if (isCTAButtonClicked) {
      boxHeightAnim.value = withSpring(SELECT_BOX_DEFAULT_HEIGHT);
    } else {
      boxHeightAnim.value = withTiming(0);
    }
  }, [isCTAButtonClicked]);

  const CTAButtonIcon = Boolean(filledData) ? faChevronDown : faPlus;

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
        style={[
          {
            overflow: "hidden",
          },
          animatedTextInputContainerStyle,
        ]}
      >
        <Component.Container>
          <FlatList
            horizontal
            data={options}
            keyExtractor={() => Math.random().toString()}
            renderItem={({ item: { detail: Option, value } }) => (
              <Component.AnimatedOption
                style={{
                  flexBasis: "10%",
                }}
                isHighlighted={value === filledData}
              >
                <View style={{ width: "100%", height: "100%", padding: 5 }}>
                  <Option />
                </View>
              </Component.AnimatedOption>
            )}
            contentContainerStyle={{
              justifyContent: "space-between",
              width: "100%",
            }}
          />
        </Component.Container>
      </Animated.View>
    </>
  );
};

export default SelectFormCard;
