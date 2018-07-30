import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { connect } from '../../utils/dva';
import indicatorStyles from './style';
import { IProps } from './prop-types';
type IDetailProps = NavigationScreenProps & IProps;

class Detail extends Component<IDetailProps> {
  static navigationOptions = {
    title: 'Detail',
  };

  render() {
    return (
      <View style={indicatorStyles.container}>
        <Text style={indicatorStyles.text}>Welcome to React Native!</Text>
        <Text style={indicatorStyles.text}>Detail from {this.props.navigation.state.params.from}</Text>
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    ...state,
  };
}
export default connect(mapStateToProps)(Detail);
