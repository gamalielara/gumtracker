import LoudlyCrying from '../assets/emoji/Loudly Crying Face.svg';
import PerseveringFace from '../assets/emoji/Persevering Face.svg';
import SlightlyFrowning from '../assets/emoji/Slightly Frowning Face.svg';
import SlightlySmile from '../assets/emoji/Slightly Smiling Face.svg';
import CalmFace from '../assets/emoji/Relieved Face.svg';
import PartyFace from '../assets/emoji/Partying Face.svg';

export const MOOD_OPTIONS = [
  {
    detail: LoudlyCrying,
    value: '1',
  },
  {
    detail: PerseveringFace,
    value: '2',
  },
  {
    detail: SlightlyFrowning,
    value: '2.5',
  },
  { detail: SlightlySmile, value: '3.5' },
  { detail: CalmFace, value: '4' },
  { detail: PartyFace, value: '5' },
] as const;
