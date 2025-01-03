import styled from 'styled-components/native';
import { BoldText } from '../../components/global/text';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const TitleText = styled(BoldText)`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const HabitsContainer = styled.FlatList``;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: center;
`;

export const NativeHeatMapWrapper = styled.View`
   height: 175px;
   width: 100%;
   padding: 10px 10px;
   margin: 10px 0;
`;
