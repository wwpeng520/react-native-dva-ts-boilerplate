import { ViewStyle, TextStyle, StyleSheet } from 'react-native';

export interface IDetailStyle {
  container: ViewStyle;
  text: TextStyle;
}

const style: IDetailStyle = {
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

const indicatorStyles = StyleSheet.create<IDetailStyle>(style);

export default indicatorStyles;
