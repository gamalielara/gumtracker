import {
  AddButton,
  Card,
  CardInfo,
  CardSide,
  CardSubtitle,
  CardTitle,
  IllustrationImage,
  Plus,
} from "./style";

interface IProps {
  title: string;
  subtitle?: string;
  SVGImage: any;
  illustrationPosition: "left" | "right";
}

const FormCard: React.FC<IProps> = ({
  title,
  SVGImage,
  subtitle,
  illustrationPosition,
}) => {
  return (
    <Card position={illustrationPosition}>
      <IllustrationImage position={illustrationPosition}>
        <SVGImage />
      </IllustrationImage>
      <CardSide>
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        </CardInfo>
        <AddButton>
          <Plus>+</Plus>
        </AddButton>
      </CardSide>
    </Card>
  );
};

export default FormCard;
