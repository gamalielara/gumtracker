import { styled } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 15px;
  margin-top: 10px;
`;

export const Option = styled.Pressable<{ isHighlighted: boolean }>`
  aspect-ratio: 1;
  padding: 5px;
  background-color: ${(props) =>
    props.isHighlighted
      ? props.theme["text-secondary"]
      : props.theme.secondary};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
