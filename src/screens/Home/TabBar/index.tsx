import React, { ElementType } from 'react';
import { TabBarContainer, TabButton, TabButtonText, Wrapper } from './styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

const TabBar: React.FC<BottomTabBarProps> = props => {
  const { state, descriptors, navigation } = props;

  return (
    <Wrapper>
      <TabBarContainer>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label =
            options.tabBarLabel?.toString() ??
            options.title?.toString() ??
            route.name.toString() ??
            '';

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabButton
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              selected={isFocused}
              key={route.key}>
              <TabButtonText selected={isFocused}>{label}</TabButtonText>
            </TabButton>
          );
        })}
      </TabBarContainer>
    </Wrapper>
  );
};

export default TabBar;
