import { ViewStyle, TextStyle, StyleSheet } from 'react-native';

export interface IMineStyle {
  container: ViewStyle;
  icon: ViewStyle;
}

const style: IMineStyle = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon: {
    width: 32,
    height: 32,
  },
};

const indicatorStyles = StyleSheet.create<IMineStyle>(style);

export default indicatorStyles;
