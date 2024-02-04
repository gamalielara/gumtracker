import {styled} from 'styled-components/native';
import {LightModeColorScheme} from '../../utils/const';

export const HeatMapWrapper = styled.View<{height: string}>`
  width: 100%;
  padding: 10px;
  height: ${props => props.height}px;
  background-color: ${LightModeColorScheme.card};
  border-radius: 10px;
`;
