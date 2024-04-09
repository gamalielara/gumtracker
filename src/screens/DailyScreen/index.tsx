import React, { useContext, useEffect } from 'react';
import * as Comp from './styles';
import DailyHabitBox from '../../components/DailyHabitBox';
import { IHabitDetail } from '../../utils/interface';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane, faPlane } from '@fortawesome/free-solid-svg-icons';
import { LightModeColorScheme } from '../../utils/const';
import { View } from 'react-native';

const DailyScreen = () => {
  const habits: IHabitDetail[] = [
    { name: 'Reading 📚', created_at: Date.now() },
    { name: 'Playing Guitar 🎸', created_at: Date.now() },
    { name: 'Learning French 🇫🇷', created_at: Date.now() },
    { name: 'Code 💻', created_at: Date.now() },
  ];

  return (
    <Comp.Container>
      <Comp.TitleText>Daily Habits</Comp.TitleText>
      <Comp.HabitsContainer
        data={habits}
        keyExtractor={item => item.name}
        renderItem={({ item, index }) => (
          <>
            <DailyHabitBox {...item} />
            {index === habits.length - 1 && (
              <Comp.SubmitButton>
                <Comp.SubmitText>Submit</Comp.SubmitText>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  color={LightModeColorScheme.background}
                  size={20}
                />
              </Comp.SubmitButton>
            )}
          </>
        )}
        contentContainerStyle={{
          gap: 25,
          paddingBottom: 125,
        }}
      />
    </Comp.Container>
  );
};

export default DailyScreen;
