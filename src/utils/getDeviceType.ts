import { Dimensions } from "react-native";
import { DeviceWidthType } from "./const";

export const getDeviceType = () => {
  const { width } = Dimensions.get("window");

  if (width < 350) return DeviceWidthType.NARROW;
  if (width >= 350 && width <= 672) return DeviceWidthType.PHONE;
  if (width > 672) return DeviceWidthType.TABLET;
};
