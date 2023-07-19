import { styled } from "styled-components/native";
import { MainContainerBackground } from "../../components/global/container";
import { BoldText } from "../../components/global/text";
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
      bottom: 10,
    },
  });

export const TabBarLabelStyle = StyleSheet.create({
  tabBarLabel: {
    fontFamily: "Inter",
    marginTop: 5,
    fontSize: 14,
  },
});
