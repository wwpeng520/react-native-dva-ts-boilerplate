/**
 * 顶部后退按钮
 */

import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from '../../utils/dva';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { NavigationScreenProps } from 'react-navigation';

import indicatorStyles from './style';
import { IProps } from './prop-types';
type IBackBtnProps = NavigationScreenProps & IProps;

class BackBtn extends React.PureComponent<IBackBtnProps> {
  static getDefaultProps = {
    iconColor: '#333',
    // onPress: () => {},
    titleStyle: {},
    title: '',
  };
  constructor(props: IBackBtnProps) {
    super(props);
  }

  goBack = () => this.props.navigation.goBack();

  render() {
    const { onPress, title, titleStyle, iconColor } = this.props;
    return (
      <TouchableOpacity style={indicatorStyles.container} onPress={onPress ? onPress : this.goBack}>
        <SimpleIcon name="arrow-left" size={18} color={iconColor} />

        <Text style={[indicatorStyles.title, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}


function mapStateToProps(state: any) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(BackBtn);
