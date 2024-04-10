import React, { useState } from 'react';
import * as Comp from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { LightModeColorScheme } from '../../utils/const';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IHabitDetail } from '../../utils/interface';

const DailyHabitBox: React.FC<IHabitDetail> = ({ name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onAddHandler = () => {
    // TODO: POST logic
    setIsChecked(state => !state);
  };

  return (
    <Comp.DailyHabitBox>
      <Comp.HabitName>{name}</Comp.HabitName>
      <Comp.AddHabitLogButton onPress={onAddHandler} checked={isChecked}>
        <FontAwesomeIcon
          icon={isChecked ? faCheck : faPlus}
          color={
            isChecked
              ? LightModeColorScheme.secondary
              : LightModeColorScheme.text
          }
        />
      </Comp.AddHabitLogButton>
    </Comp.DailyHabitBox>
  );
};

export default DailyHabitBox;
