import {
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';

export interface IHomeStyle {
  container: ViewStyle;
  text: TextStyle;
}

const style: IHomeStyle = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
};

const indicatorStyles = StyleSheet.create<IHomeStyle>(style);

export default indicatorStyles;
