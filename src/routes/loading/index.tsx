import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { connect } from '../../utils/dva';
import indicatorStyles from './style';
import { IProps } from './prop-types';
type ILoadingProps = IProps;

class Loading extends Component<ILoadingProps> {
  render() {
    return (
      <View style={indicatorStyles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    ...state,
  };
}
export default connect(mapStateToProps)(Loading);
