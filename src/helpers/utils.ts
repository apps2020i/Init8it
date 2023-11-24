import {MODALS} from '../constants/routeConstant';
import modalfy from './modalfy';
import NetInfo from '@react-native-community/netinfo';

const globalAny: any = global;

export const doIfOnline = (
  onConnectivityAssured: () => void,
  onConnectivityLost: () => void,
) => {
  NetInfo.fetch().then(net => {
    if (net?.isConnected) {
      onConnectivityLost();
    } else {
      onConnectivityAssured();
    }
  });
};

export const startLoader = () => {
  if (modalfy.isModalOpened(MODALS.loader)) {
    return;
  }
  modalfy.open(MODALS.loader);
};

export const stopLoader = () => {
  modalfy.close(MODALS.loader);
};
export const showToaster = (
  message: string,
  type: 'S' | 'E',
  title?: string,
) => {
  globalAny.props.showToaster({
    message,
    type,
    title,
  });
};

export const openNetworkWarning = () => {
  if (modalfy.isModalOpened(MODALS.network)) {
    return;
  }
  modalfy.open(MODALS.network);
};

export const closeNetworkWarning = () => {
  modalfy.close(MODALS.network);
};

export const openModal = (name: string, params: any) => {
  if (modalfy.isModalOpened(name)) {
    return;
  }
  modalfy.open(name, params);
};

export const closeModal = (name: string) => {
  modalfy.close(name);
};
