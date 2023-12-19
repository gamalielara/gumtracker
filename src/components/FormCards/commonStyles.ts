import { styled } from "styled-components/native";
import { BaseText, BoldText } from "../global/text";
import { css } from "styled-components";

interface IllustrationPosition {
    position?: "left" | "right";
}

const Card = styled.View<IllustrationPosition>`
  background-color: ${(props) => props.theme.card};
  width: 100%;
  aspect-ratio: 3/1;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  padding: 10px;
  margin-top: 10px;
  ${(props) =>
        props.position === "right" &&
        css`
      align-items: flex-end;
    `}
`;

const IllustrationImage = styled.View<IllustrationPosition>`
  position: absolute;
  top: -10%;
  ${(props) =>
        props.position === "right"
            ? css`
          left: -20%;
        `
            : css`
          right: -15%;
        `};
  width: 65%;
  aspect-ratio: 1;
`;

const CardSide = styled.View<{ layoutPosition: "left" | "right" }>`
  flex-direction: ${(props) =>
        props.layoutPosition === "right" ? "row" : "row-reverse"};
  margin: auto 0;
  gap: 15px;
  align-items: center;
  justify-content: ${(props) =>
        props.layoutPosition === "right" ? "flex-start" : "flex-end"};
`;

const CardInfo = styled.View`
  margin-top: auto;
  margin-bottom: auto;
`;

const CardTitle = styled(BoldText) <IllustrationPosition>`
  font-size: 18px;
  margin: auto 0;
  color: ${(props) => props.theme["text-secondary"]};
  text-align: center;
`;

const CardSubtitle = styled(BaseText) <IllustrationPosition>`
  font-size: 12px;
  color: ${(props) => props.theme["text-secondary"]};
  text-align: center;
`;

const ActionButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.text};
  width: 50px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
`;


export default {
    Card, IllustrationImage, CardSide, CardInfo, CardTitle, CardSubtitle, ActionButton
}
