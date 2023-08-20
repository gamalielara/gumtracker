import { styled } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 15px;
`;

export const Option = styled.Pressable`
  aspect-ratio: 1;
  padding: 5px;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
