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
      
}
