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
import { IFormCardMethodhandle } from "./SelectBox/types";
import { IFormCard } from "../../utils/interface";

const FormCard: React.FC<IFormCard> = (props) => {
  const { title, SVGImage, subtitle, illustrationPosition, type, options } =
    props;
  const { colorScheme } = useContext(CommonContext);

  const [isCTAButtonClicked, setIsCTAButtonClicked] = useState(false);

  const selectBoxRef = useRef<IFormCardMethodhandle>();

  const onCTAButtonClick = () => {
    setIsCTAButtonClicked((state) => !state);

    if (isCTAButtonClicked) {
      selectBoxRef.current?.hideSelectBox();
    } else {
      selectBoxRef.current?.showSelectBox();
    }
  };

  return (
    <>
      <Card position={illustrationPosition}>
        <IllustrationImage position={illustrationPosition}>
          <SVGImage />
        </IllustrationImage>
        <CardSide>
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
      <SelectBox options={options} ref={selectBoxRef} />
    </>
  );
};

export default FormCard;
