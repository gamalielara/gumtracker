import { styled } from "styled-components/native";
import { BaseText } from "../../components/global/text";
import { StyleSheet } from "react-native";
import { APPCOLORSCHEME } from "../../utils/const";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainContainer from "../../components/global/MainContainer";
import { MainGlobalContainer } from "../../components/global/container";

type EdgeInsets = ReturnType<typeof useSafeAreaInsets>;

export const GumjournalsContainerView = styled(MainContainer)<{
  height: number;
}>`
  ${MainGlobalContainer} {
    height: ${(props) => props.height}px;
  }
`;

export const TabBarStyle = (insets: EdgeInsets) =>
  StyleSheet.create({
    tabBar: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: APPCOLORSCHEME.secondary,
      paddingTop: 20,
      paddingBottom: 20, // Need extra padding bottom
      height: (insets.bottom || 20) + 60,
      borderTopColor: APPCOLORSCHEME.secondary,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
    },
  });

export const TabBarLabelStyle = StyleSheet.create({
  tabBarLabel: {
    fontFamily: "Inter",
    marginTop: 10,
    fontSize: 14,
  },
});

// Common form styles
export const Container = styled.KeyboardAvoidingView`
  background-color: ${APPCOLORSCHEME.background};
  padding: 0 3%;
`;

export const ScrollingBaseView = styled.ScrollView`
  background-color: ${APPCOLORSCHEME.background};
  margin-top: 10px;
`;

export const QuestionText = styled(BaseText)`
  font-size: 18px;
`;

export const QuestionContainer = styled.View`
  margin: 20px 0;
`;

export const FormInput = styled.TextInput<{ isDisabled?: boolean }>`
  width: 100%;
  background-color: ${(props) =>
    props.isDisabled ? APPCOLORSCHEME["text-secondary"] : APPCOLORSCHEME.card};
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
  color: ${APPCOLORSCHEME.text};
  padding: 15px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const CheckboxViewContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

export const MultiRadioGridQuestion = styled(BaseText)`
  margin: 10px 0;
`;

export const MultiRadioGridContainer = styled.View`
  width: 100%;
`;

export const ScrollableHorizontalView = styled.ScrollView`
  width: 100%;
`;
