import { ForwardedRef, useCallback, useImperativeHandle } from "react";
import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

interface IParams<T> {
  ref: ForwardedRef<T>,
  height: number
}

export default <T>(params: IParams<T>) => {
  const { ref, height } = params;

  const boxHeightAnim = useSharedValue(0);

  const expandBox = useCallback(() => {
    boxHeightAnim.value = withSpring(height);
  }, [height]);

  const hideBox = useCallback(() => {
    boxHeightAnim.value = withTiming(0);
  }, []);

  useImperativeHandle(ref, () => ({
    show: expandBox,
    hide: hideBox,
  }));

  const animatedTextInputContainerStyle = useAnimatedStyle(() => ({
    height: boxHeightAnim.value
  }));


  return { expandBox, hideBox, animatedTextInputContainerStyle };
}