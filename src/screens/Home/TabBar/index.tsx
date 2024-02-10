import React from 'react';
import { TabBarContainer, TabButton, TabButtonText, Wrapper } from './styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';

const TabBar: React.FC<BottomTabBarProps> = props => {
  const { state, descriptors, navigation } = props;

  return (
    <Wrapper>
      <TabBarContainer>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label =
            options.tabBarLabel ?? options.title ?? route.name ?? '';

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

          const Icon = options.tabBarIcon;

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
              onLongPress={onLongPress}>
              <>
                <Icon focused={isFocused} />
                <TabButtonText selected={isFocused}>
                  {String(label)}
                </TabButtonText>
              </>
            </TabButton>
          );
        })}
      </TabBarContainer>
    </Wrapper>
  );
};

export default TabBar;
