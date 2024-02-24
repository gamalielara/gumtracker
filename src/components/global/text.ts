import { styled } from 'styled-components/native';

export const BaseText = styled.Text`
  font-family: 'Inter-Regular';
  color: ${props => props.theme.text};
`;

export const BoldText = styled(BaseText)`
  font-family: 'Inter-Bold';
`;

export const BaseTextInput = styled.TextInput`
  font-family: 'Inter-Regular';
`;
