import { styled } from "styled-components/native";
import { MainContainerBackground } from "../../components/global/container";
import { BaseText, BoldText } from "../../components/global/text";
import { StyleSheet } from "react-native";
import { APPCOLORSCHEME } from "../../utils/const";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type EdgeInsets = ReturnType<typeof useSafeAreaInsets>;

export const GumjournalsContainerView = styled(MainContainerBackground)`
  width: auto;
  padding-top: 10px;
  box-sizing: content-box;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;

export const GumjournalsTitleText = styled(BoldText)`
  font-size: 24px;
  text-align: center;
`;

export const TabIcon = styled.View`
  width: 20px;
  aspect-ratio: 1;
`;

export const TabBarStyle = (insets: EdgeInsets) =>
  StyleSheet.create({
    tabBar: {
      borderRadius: 15,
      backgroundColor: APPCOLORSCHEME.secondary,
      padding: 10,
      paddingBottom: 10,
      height: 60,
      marginBottom: insets.bottom > 0 ? 0 : 10,
      borderTopColor: APPCOLORSCHEME.secondary,
      position: "absolute",
      bottom: 0,
    },
  });

export const TabBarLabelStyle = StyleSheet.create({
  tabBarLabel: {
    fontFamily: "Inter",
    marginTop: 5,
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
  margin-top: 50px;
`;

export const QuestionText = styled(BaseText)`
  font-size: 18px;
`;

export const QuestionContainer = styled.View`
  margin: 20px 0;
`;

export const FormInput = styled.TextInput`
  width: 100%;
  background-color: ${APPCOLORSCHEME.card};
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
