import {
  ActionButton,
  Card,
  CardInfo,
  CardSide,
  CardSubtitle,
  CardTitle,
  IllustrationImage,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheck,
  faChevronDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import CommonContext from "../../module/common";
import SelectBox from "./SelectBox";
import {
  FormCardType,
  IFormCard,
  IFormCardMethodhandle,
} from "../../utils/interface";
import TextInputBox from "./TextInputBox";
import { SelectedTrackerData } from "../../screens/TrackerForms/context";
import usePickFormValue from "../../utils/hook/usePickFormValue";

const FormCard: React.FC<IFormCard> = (props) => {
  const {
    formKey,
    title,
    SVGImage,
    subtitle,
    illustrationPosition,
    type,
    options,
    additionIllustrationStyle,
    textInputPlaceHolder,
  } = props;

  const selectedGumjournalsDataContext = useContext(SelectedTrackerData);

  const filledData = usePickFormValue(formKey);

  if (!selectedGumjournalsDataContext) return <></>;

  const { selectedGumjournalsData, selectedDate } = selectedGumjournalsDataContext;

  // empty object if data has not been filled
  const isDataHasBeenFilled = Object.keys(selectedGumjournalsData).length > 0;

  const { colorScheme } = useContext(CommonContext);

  const [isCTAButtonClicked, setIsCTAButtonClicked] = useState(false);

  const bottomBoxRef = useRef<IFormCardMethodhandle>(null);

  console.log(selectedGumjournalsData);


  useEffect(() => {
    setIsCTAButtonClicked(false);
  }, [selectedDate]);

  const onCTAButtonClick = () => {
    setIsCTAButtonClicked((state) => !state);

    if (isCTAButtonClicked) {
      bottomBoxRef.current?.hide();
    } else {
      bottomBoxRef.current?.show();
    }
  };


  let BottomCard;
  switch (type) {
    case FormCardType.SELECT:
      BottomCard = (
        <SelectBox
          options={options}
          ref={bottomBoxRef}
          filledData={filledData as string}
          fieldKey={formKey}
        />
      );
      break;
    default:
    case FormCardType.INPUT_TEXT:
      BottomCard = (
        <TextInputBox
          ref={bottomBoxRef}
          textInputPlaceHolder={textInputPlaceHolder}
          filledData={filledData as string[]}
          fieldKey={formKey}
        />
      );
      break;
  }

  const CTAButtonIcon = isDataHasBeenFilled ? faChevronDown : faPlus;

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
          <ActionButton onPress={onCTAButtonClick}>
            <FontAwesomeIcon
              icon={isCTAButtonClicked ? faCheck : CTAButtonIcon}
              color={colorScheme["text-secondary"]}
            />
          </ActionButton>
        </CardSide>
      </Card>
      {BottomCard}
    </>
  );
};

export default FormCard;
