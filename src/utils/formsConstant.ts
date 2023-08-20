import MoodCardImage from "../assets/svg/mood-card-illustration.svg";
import { FormCardType, IFormCard } from "./interface";
import LoudlyCrying from "../assets/emoji/Loudly Crying Face.svg";
import PerseveringFace from "../assets/emoji/Persevering Face.svg";
import SlightlyFrowning from "../assets/emoji/Slightly Frowning Face.svg";
import SlightlySmile from "../assets/emoji/Slightly Smiling Face.svg";
import CalmFace from "../assets/emoji/Relieved Face.svg";
import PartyFace from "../assets/emoji/Partying Face.svg";

export const FORMS_DETAIL: IFormCard[] = [
  {
    title: "Add Mood",
    subtitle: "How are you feeling today?",
    SVGImage: MoodCardImage,
    illustrationPosition: "right",
    type: FormCardType.SELECT,
    options: [
      LoudlyCrying,
      PerseveringFace,
      SlightlyFrowning,
      SlightlySmile,
      CalmFace,
      PartyFace,
    ],
  },
];
