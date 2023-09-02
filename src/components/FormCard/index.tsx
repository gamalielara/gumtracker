import {
  AddButton,
  Card,
  CardInfo,
  CardSide,
  CardSubtitle,
  CardTitle,
  IllustrationImage,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef, useState } from "react";
import CommonContext from "../../module/common";
import SelectBox from "./SelectBox";
import {
  FormCardType,
  IFormCard,
  IFormCardMethodhandle,
} from "../../utils/interface";
import TextInputBox from "./TextInputBox";

const FormCard: React.FC<IFormCard> = (props) => {
  const {
    title,
    SVGImage,
    subtitle,
    illustrationPosition,
    type,
    options,
    additionIllustrationStyle,
    textInputPlaceHolder,
  } = props;
  const { colorScheme } = useContext(CommonContext);

  const [isCTAButtonClicked, setIsCTAButtonClicked] = useState(false);

  const selectBoxRef = useRef<IFormCardMethodhandle>(null);

  const onCTAButtonClick = () => {
    setIsCTAButtonClicked((state) => !state);

    if (isCTAButtonClicked) {
      selectBoxRef.current?.hideSelectBox();
    } else {
      selectBoxRef.current?.showSelectBox();
    }
  };

  let BottomCard;
  switch (type) {
    case FormCardType.SELECT:
      BottomCard = <SelectBox options={options} ref={selectBoxRef} />;
      break;
    default:
    case FormCardType.INPUT_TEXT:
      BottomCard = (
        <TextInputBox
          ref={selectBoxRef}
          textInputPlaceHolder={textInputPlaceHolder}
        />
      );
      break;
  }

  return (
    <>
      <Card position={illustrationPosition}>
        <IllustrationImage
          position={illustrationPosition}
          {...additionIllustrationStyle}
        >
          <SVGImage />
        </IllustrationImage>
        <CardSide layoutPosition={illustrationPosition}>
          <CardInfo>
            <CardTitle>{title}</CardTitle>
            {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          </CardInfo>
          <AddButton onPress={onCTAButtonClick}>
            <FontAwesomeIcon
              icon={isCTAButtonClicked ? faCheck : faPlus}
              color={colorScheme["text-secondary"]}
            />
          </AddButton>
        </CardSide>
      </Card>
      {BottomCard}
    </>
  );
};

export default FormCard;
