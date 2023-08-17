import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default () => {
  const { top, right, left, bottom } = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingRight: right,
        paddingTop: top,
        paddingLeft: left,
        paddingBottom: bottom || 65,
      }}
    />
  );
};
