import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styled } from 'styled-components/native';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { DarkModeColorScheme } from '../../utils/const';

const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default ({ goBackCallbackFunc }: { goBackCallbackFunc: () => void }) => {
  return (
    <Button onPress={goBackCallbackFunc}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        color={DarkModeColorScheme.text} // TODO: should use theme context later
        size={24}
      />
    </Button>
  );
};
