import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationTabScreenOptions, NavigationScreenProps } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
import { AppState } from '../../models/states';

import { NavigationActions } from '../../utils';
import { connect } from '../../utils/dva';
import * as RouterName from '../../constants/router';

import indicatorStyles from './style';
import { IProps } from './prop-types';
type IMineProps = NavigationScreenProps & IProps & AppState;

class Mine extends Component<IMineProps> {
  static navigationOptions: NavigationTabScreenOptions = {
    // title: 'Mine',
    tabBarLabel: 'Mine',
    tabBarIcon: ({ focused, tintColor }) => (
      <Feather name="user" size={32} color={focused ? tintColor : 'gray'} />
    ),
    // tabBarVisible: false
  };

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: RouterName.Login }));
  };

  logout = () => {
    this.props.dispatch({ type: 'app/logout' });
  };

  render() {
    const { login } = this.props;
    return (
      <View style={indicatorStyles.container}>
        {login ? (
          <Button title="Logout" onPress={this.logout} />
        ) : (
          <Button title="Go To Login" onPress={this.gotoLogin} />
        )}
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    ...state,
  };
}
export default connect(mapStateToProps)(Mine);
