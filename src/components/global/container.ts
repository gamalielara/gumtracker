import { styled } from "styled-components/native";

export const MainGlobalContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
`;

export const SafeAreaApp = styled.SafeAreaView`
  height: auto;
  margin: 10px;
`;

export const VisuallyInvisible = styled.View`
  width: 0;
  heihgt: 0;
  visibility: hidden;
`;

export const VisuallyInvisibleWithHeight = styled(VisuallyInvisible)`
  height: 100px;
`;
