import {
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';

export interface ILoadingStyle {
  container: ViewStyle;
}

const style: ILoadingStyle = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

};

const indicatorStyles = StyleSheet.create<ILoadingStyle>(style);

export default indicatorStyles;
