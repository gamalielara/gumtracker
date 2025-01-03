import { requireNativeComponent, ViewProps } from 'react-native';

export interface TNativeHeatMap extends ViewProps {
  data: Record<string, number>;
}

export const NativeHeatMap =
  requireNativeComponent<TNativeHeatMap>('NativeHeatMap');
