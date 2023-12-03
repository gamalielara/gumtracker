import { FormCardType, IFormCard } from "./interface";

import MoodCardImage from "../assets/svg/mood-card-illustration.svg";
import HighlightOfTheDayImage from "../assets/svg/highlight-card-illustration.svg";
import GratitudeImage from "../assets/svg/gratitude-card-illustration.svg";
import BodyWeightImage from "../assets/svg/body-weight-illustration.svg";
import BellyCircumference from "../assets/svg/belly-illustration.svg";
import HabitsIllustration from "../assets/svg/habit-illustration.svg"



import LoudlyCrying from "../assets/emoji/Loudly Crying Face.svg";
import PerseveringFace from "../assets/emoji/Persevering Face.svg";
import SlightlyFrowning from "../assets/emoji/Slightly Frowning Face.svg";
import SlightlySmile from "../assets/emoji/Slightly Smiling Face.svg";
import CalmFace from "../assets/emoji/Relieved Face.svg";
import PartyFace from "../assets/emoji/Partying Face.svg";

export enum FormKey {
  MOOD,
  HIGHLIGHTS_OF_THE_DAY,
  GRATITUDE_STATEMENTS,
  BODY_WEIGHT,
  BELLY_CIRCUMFERENCE,
}

export const FORMS_DETAIL: IFormCard[] = [
  {
    formKey: FormKey.MOOD,
    title: "Add Mood",
    subtitle: "How are you feeling today?",
    SVGImage: MoodCardImage,
    illustrationPosition: "right",
    type: FormCardType.SELECT,
    options: [
      {
        detail: LoudlyCrying,
        value: "1",
      },
      {
        detail: PerseveringFace,
        value: "2",
      },
      {
        detail: SlightlyFrowning,
        value: "2.5",
      },
      { detail: SlightlySmile, value: "3.5" },
      { detail: CalmFace, value: "4" },
      { detail: PartyFace, value: "5" },
    ],
  },
  {
    formKey: FormKey.HIGHLIGHTS_OF_THE_DAY,
    title: "Highlights of the Day",
    subtitle: "What are the most memorable things\nthat happened today?",
    SVGImage: HighlightOfTheDayImage,
    illustrationPosition: "left",
    type: FormCardType.INPUT_TEXT,
    textInputPlaceHolder: "Enter the most memorable thing here",
  },
  {
    formKey: FormKey.GRATITUDE_STATEMENTS,
    title: "Gratitude Statements",
    subtitle: "What are things you are grateful for today?",
    SVGImage: GratitudeImage,
    illustrationPosition: "left",
    type: FormCardType.INPUT_TEXT,
    additionIllustrationStyle: {
      top: "-40%",
      right: "-20%",
    },
    textInputPlaceHolder: "Enter thing you are grateful for here",
  },
  {
    formKey: FormKey.BODY_WEIGHT,
    title: "Body Weight",
    subtitle: "Only available on Mondays",
    SVGImage: BodyWeightImage,
    illustrationPosition: "left",
    type: FormCardType.INPUT_NUMBER,
    additionIllustrationStyle: {
      top: "-50%",
      right: "-20%",
    },
    textInputPlaceHolder: "Enter thing you are grateful for here",
  },
  {
    formKey: FormKey.BELLY_CIRCUMFERENCE,
    title: "Belly Circumference",
    subtitle: "Only available on Mondays",
    SVGImage: BellyCircumference,
    illustrationPosition: "left",
    type: FormCardType.INPUT_NUMBER,
    additionIllustrationStyle: {
      top: "-40%",
      right: "-20%",
    },
    textInputPlaceHolder: "Enter thing you are grateful for here",
  },
];
