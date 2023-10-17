import { ForwardedRef, useCallback, useImperativeHandle } from "react";
import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

interface IParams<T> {
  ref: ForwardedRef<T>,
  filledData: number;
  height?: number
}

const BOX_HEIGHT = 75;

export default <T extends any>(params: IParams<T>) => {
  const { ref, filledData, height } = params;

  const boxHeightAnim = useSharedValue(0);

  const defaultBoxHeight = filledData * (height ?? BOX_HEIGHT);

  const expandBox = useCallback(() => {
    boxHeightAnim.value = withSpring(defaultBoxHeight);
  }, []);

  const hideBox = useCallback(() => {
    boxHeightAnim.value = withTiming(0);
  }, []);

  useImperativeHandle(ref, () => ( {
    show: expandBox,
    hide: hideBox,
  } ));

  const animatedTextInputContainerStyle = useAnimatedStyle(() => ( {
    height: boxHeightAnim.value
  } ));

  return { expandBox, hideBox, animatedTextInputContainerStyle };
}