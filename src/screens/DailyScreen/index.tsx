import React from 'react';
import { Text, View } from 'react-native';
import * as Comp from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DailyScreen = () => {
  const habits = [
    { name: 'Reading 📚', color: 'red' },
    { name: 'Playing Guitar 🎸', color: 'brown' },
    { name: 'Learning French 🇫🇷', color: 'blue' },
    { name: 'Code 💻', color: 'gray' },
    { name: 'Reading 📚', color: 'red' },
    { name: 'Playing Guitar 🎸', color: 'brown' },
    { name: 'Learning French 🇫🇷', color: 'blue' },
    { name: 'Code 💻', color: 'gray' },
    { name: 'Reading 📚', color: 'red' },
    { name: 'Playing Guitar 🎸', color: 'brown' },
    { name: 'Learning French 🇫🇷', color: 'blue' },
    { name: 'Code 💻', color: 'gray' },
    { name: 'Reading 📚', color: 'red' },
    { name: 'Playing Guitar 🎸', color: 'brown' },
    { name: 'Learning French 🇫🇷', color: 'blue' },
    { name: 'Code 💻', color: 'gray' },
    { name: 'Reading 📚', color: 'red' },
    { name: 'Playing Guitar 🎸', color: 'brown' },
    { name: 'Learning French 🇫🇷', color: 'blue' },
    { name: 'Code 💻', color: 'gray' },
  ];

  return (
    <Comp.Container>
      <Comp.TitleText>Daily Habit</Comp.TitleText>
      <Comp.HabitsContainer
        data={habits}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Comp.DailyHabitBox bgColor={item.color}>
              <Comp.HabitName>{item.name}</Comp.HabitName>
            </Comp.DailyHabitBox>
          </TouchableOpacity>
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
