import {
  NavigationScreenProp,
  NavigationInitAction,
  NavigationNavigateAction,
  NavigationBackAction,
  NavigationSetParamsAction,
  NavigationResetAction,
  NavigationPopAction,
  NavigationPushAction,
  NavigationReplaceAction,
  NavigationCompleteTransitionAction,
  NavigationPopToTopActionPayload,
} from 'react-navigation';
declare module 'dva-loading';
declare module 'react-redux';
declare module 'react-native-image-gallery';
declare module 'react-native-simple-store';
declare module 'react-native-scrollable-tab-view';
// declare module 'dva-core';
// declare module 'dva-no-router';

// declare module 'rn-umeng';
// declare module 'react-native-wechat';
// declare module 'react-navigation-redux-helpers';
// declare module 'react-native-image-progress';
// declare module 'react-native-save-image';
// declare module 'react-native-progress/Bar';
// declare module 'react-native-fs';
// declare module 'react-native-permissions';
// declare module '@remobile/react-native-contacts';
// declare module 'react-native-open-settings';
// declare module 'react-native-qiyu';
// declare module 'react-native-qrcode';
// declare module 'react-native-tab-navigator';
// declare module 'react-native-weibo';

interface IBaseAction {
  type: string;
}

export interface INavigation
  extends NavigationScreenProp<
      any,
      | NavigationInitAction
      | NavigationNavigateAction
      | NavigationBackAction
      | NavigationSetParamsAction
      | NavigationResetAction
      | NavigationPopAction
      | NavigationPushAction
      | NavigationReplaceAction
      | NavigationCompleteTransitionAction
    > {
  // state: NavigationParams;
  // dispatch: NavigationDispatch;
  // goBack: (routeKey?: (string | null)) => boolean;
  // navigate: (
  //   routeName: string,
  //   params?: NavigationParams,
  //   action?: NavigationAction
  // ) => boolean;
  // setParams: (newParams: NavigationParams) => boolean;
  // addListener: (
  //   eventName: string,
  //   callback: NavigationEventCallback
  // ) => NavigationEventSubscription;
  // push: (
  //   routeName: string,
  //   params?: NavigationParams,
  //   action?: NavigationNavigateAction
  // ) => boolean;
  // replace: (
  //   routeName: string,
  //   params?: NavigationParams,
  //   action?: NavigationNavigateAction
  // ) => boolean;
  // pop: (n?: number, params?: { immediate?: boolean }) => boolean;
  // popToTop: (params?: { immediate?: boolean }) => boolean;
}
