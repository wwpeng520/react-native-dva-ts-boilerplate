import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationTabScreenOptions, NavigationScreenProps } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationActions } from '../../utils';
import { connect } from '../../utils/dva';
import * as RouterName from '../../constants/router';

import indicatorStyles from './style';
import { IProps } from './prop-types';
type IHomeProps = NavigationScreenProps & IProps;

class Home extends Component<IHomeProps> {
  static navigationOptions: NavigationTabScreenOptions = {
    // title: 'Home',
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => (
      // <Image
      //   style={[indicatorStyles.icon, { tintColor: focused ? tintColor : 'gray' }]}
      //   source={require('../assets/images/house.png')}
      // />
      <Ionicons name="md-home" size={32} color={focused ? tintColor : 'gray'} />
    ),
  };
  render() {
    return (
      <View style={indicatorStyles.container}>
        <Text style={indicatorStyles.text}>Welcome to React Native!</Text>
        <Text style={indicatorStyles.text}>Count: {this.props.count}</Text>
        <Button
          title="+"
          onPress={() => {
            this.props.dispatch({ type: 'count/add' });
          }}
        />
        <Button
          title="-"
          onPress={() => {
            this.props.dispatch({ type: 'count/minus' });
          }}
        />
        <Button
          title="+ async"
          onPress={() => {
            this.props.dispatch({ type: 'count/addWithDelay' });
          }}
        />
        <Button
          title="Go To Detail"
          onPress={() => {
            this.props.dispatch(
              NavigationActions.navigate({
                routeName: RouterName.Detail,
                params: { from: 'Home' },
              }),
            );
          }}
        />
        <Button
          title="Go To Mine"
          onPress={() => {
            this.props.dispatch(NavigationActions.navigate({ routeName: RouterName.Mine }));
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    ...state,
  };
}
export default connect(mapStateToProps)(Home);
