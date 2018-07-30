import React, { Component } from 'react';
import { Button, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationActions } from '../../utils';
import { connect } from '../../utils/dva';
import indicatorStyles from './style';
import { IProps } from './prop-types';
type ILoginProps = NavigationScreenProps & IProps;

class Login extends Component<ILoginProps> {
  static navigationOptions = {
    title: 'Login',
  };

  onLogin = () => {
    // this.props.dispatch(createAction('app/login')());
    this.props.dispatch({ type: 'app/login' });
  };

  onClose = () => {
    this.props.dispatch(NavigationActions.back());
  };

  render() {
    const { fetching } = this.props;
    return (
      <View style={indicatorStyles.container}>
        {fetching ? <ActivityIndicator /> : <Button title="Login" onPress={this.onLogin} />}
        {!fetching && (
          <TouchableOpacity style={indicatorStyles.close} onPress={this.onClose}>
            <Ionicons name="md-close" size={32} color={'#666'} />
          </TouchableOpacity>
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
export default connect(mapStateToProps)(Login);
