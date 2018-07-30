import {
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import size from '../../config/size';

export interface IBackBtnStyle {
  container: ViewStyle;
  title: TextStyle;
}

const style: IBackBtnStyle = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: size.paddingSmall,
    paddingRight: size.paddingLarge,
    height: size.headerHeight,
  },
  title: {
    fontSize: 17,
    color: '#555',
  },
};

const indicatorStyles = StyleSheet.create<IBackBtnStyle>(style);

export default indicatorStyles;
