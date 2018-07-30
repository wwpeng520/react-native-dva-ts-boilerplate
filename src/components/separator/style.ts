import { ViewStyle, StyleSheet } from 'react-native';
import color from '../../config/color';
import size from '../../config/size';

export interface ISeparatorStyle {
  line: ViewStyle;
}

const style: ISeparatorStyle = {
  line: {
    width: size.width,
    height: size.onePixel,
    backgroundColor: color.lightBorder,
  },
};

const indicatorStyles = StyleSheet.create<ISeparatorStyle>(style);

export default indicatorStyles;
