import React, { useContext, useEffect, useRef, useState } from "react";
import { Overlay, ToastBox, ToastContainer, ToastText } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ToastType } from "../../utils/const";
import { Animated } from "react-native";
import CommonContext from "../../module/common";

export default () => {
  const [toast, setToast] = useState<ToastType | null>(null);
  const [toastText, setToastText] = useState<string | null>(null);

  const fadingAnim = useRef(new Animated.Value(0)).current;

  const { colorScheme } = useContext(CommonContext);

  let toastIcon;
  switch (toast) {
    case ToastType.INFO:
      toastIcon = faCircleInfo;
    case ToastType.SUCCESS:
      toastIcon = faCircleCheck;
    case ToastType.FAILED:
      toastIcon = faCircleXmark;
    case ToastType.INFO:
    default:
      toastIcon = faCircleInfo;
  }

  useEffect(() => {
    if (toast) {
      Animated.timing(fadingAnim, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(fadingAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }, 1000);

      setTimeout(() => {
        setToast(null);
      }, 1200);
    }
  }, [toast]);

  useEffect(() => {
    const registerToastEvent = () =>
      (globalThis.showInfoToast = (text: string) => {
        setToast(ToastType.INFO);
        setToastText(text);
      });

    registerToastEvent();
  }, []);

  return (
    toast && (
      <ToastContainer>
        <ToastBox>
          <FontAwesomeIcon
            icon={toastIcon}
            color={colorScheme.text}
            size={30}
          />
          <ToastText>{toastText}</ToastText>
        </ToastBox>
        <Overlay
          style={{
            opacity: fadingAnim,
          }}
        ></Overlay>
      </ToastContainer>
    )
  );
};
