import { styled } from "styled-components/native";
import { BaseText, BoldText } from "../global/text";
import { css } from "styled-components";

interface IllustrationPosition {
  position?: "left" | "right";
}

export const Card = styled.View<IllustrationPosition>`
  background-color: ${(props) => props.theme.card};
  width: 100%;
  aspect-ratio: 3/1;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  padding: 10px;
  ${(props) =>
    props.position === "right" &&
    css`
      align-items: flex-end;
    `}
`;

export const IllustrationImage = styled.View<IllustrationPosition>`
  position: absolute;
  top: -10%;
  ${(props) =>
    props.position === "right"
      ? css`
          left: -15%;
        `
      : css`
          right: -15%;
        `};
  width: 65%;
  aspect-ratio: 1;
  transform: rotate(-10deg);
`;

export const CardSide = styled.View`
  flex-direction: row;
  margin: auto 10px;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const CardInfo = styled.View`
  margin-top: auto;
  margin-bottom: auto;
`;

export const CardTitle = styled(BoldText)<IllustrationPosition>`
  font-size: 20px;
  margin: auto 0;
  color: ${(props) => props.theme["text-secondary"]};
  text-align: center;
`;

export const CardSubtitle = styled(BaseText)<IllustrationPosition>`
  font-size: 14px;
  color: ${(props) => props.theme["text-secondary"]};
  text-align: center;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.text};
  width: 50px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
`;

export const Plus = styled(BaseText)`
  color: ${(props) => props.theme["text-secondary"]};
  margin: 0;
  font-size: 20px;
  line-height: 20px;
`;
