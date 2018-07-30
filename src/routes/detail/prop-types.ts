import { INavigationProps } from '..';
import { countState } from '../../models/states';

export interface IProps extends INavigationProps {
  count: countState;
}
