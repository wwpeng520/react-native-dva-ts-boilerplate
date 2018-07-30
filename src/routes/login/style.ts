import {
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';

export interface IHomeStyle {
  container: ViewStyle;
  close: ViewStyle;
}

const style: IHomeStyle = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 20,
    padding: 15,
  },
};

const indicatorStyles = StyleSheet.create<IHomeStyle>(style);

export default indicatorStyles;
