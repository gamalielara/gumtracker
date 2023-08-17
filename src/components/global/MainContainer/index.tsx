import { MainGlobalContainer } from "../container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import { Platform } from "react-native";

export default ({ children }: { children: React.ReactNode }) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <MainGlobalContainer
      style={{
        paddingTop: top,
        paddingBottom: bottom,
      }}
      enabled
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {children}
    </MainGlobalContainer>
  );
};
