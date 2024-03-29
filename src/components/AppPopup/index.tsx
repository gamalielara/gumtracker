import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Modal, View } from 'react-native';
import * as PopupComp from './styles';

const AppPopup: React.FC = () => {
  const [popupChildren, setPopupChildren] = useState<React.ReactNode>(null);

  useEffect(() => {
    globalThis.showPopup = (popupToShow: React.ReactNode) => {
      setPopupChildren(popupToShow);
    };

    globalThis.dismissPopup = () => setPopupChildren(null);
  }, []);

  if (popupChildren) {
    return (
      <Modal
        visible={Boolean(popupChildren)}
        transparent={true}
        style={{ backgroundColor: 'black' }}
        animationType="fade"
        onRequestClose={() => {}}
        statusBarTranslucent={true}>
        <PopupComp.Container>{popupChildren}</PopupComp.Container>
      </Modal>
    );
  }

  return null;
};

export default AppPopup;
