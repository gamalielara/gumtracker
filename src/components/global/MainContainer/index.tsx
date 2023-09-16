import { MainGlobalContainer } from "../container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";

export default ({ children }: { children: React.ReactNode }) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <MainGlobalContainer
      style={{
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      {children}
    </MainGlobalContainer>
  );
};
