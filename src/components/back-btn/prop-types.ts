import { INavigationProps } from '../index.d';

export interface IProps extends INavigationProps {
  title?: string;
  titleStyle?: {};
  onPress?: () => {};
  iconColor?: string;
}
