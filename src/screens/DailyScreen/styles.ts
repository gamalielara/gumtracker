import styled from 'styled-components/native';
import { BoldText, SemiboldText } from '../../components/global/text';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px 20px 0;
`;

export const TitleText = styled(BoldText)`
  font-size: 30px;
  margin-bottom: 75px;
`;

export const HabitsContainer = styled.FlatList``;

export const SubmitButton = styled.TouchableOpacity`
  width: 95%;
  margin: 20px auto;
  padding: 15px;
  background-color: ${props => props.theme.secondary};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled(BoldText)`
  text-align: center;
  font-size: 20px;
  color: ${props => props.theme.background};
  margin-right: 10px;
`;
