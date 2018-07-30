import React from 'react';
import { View, StyleSheet } from 'react-native';
import indicatorStyles from './style';
import { SeparatorPropTypes } from './prop-types';

/**
 * 分割线
 */
export default class Separator extends React.PureComponent<SeparatorPropTypes> {
  constructor(props: SeparatorPropTypes) {
    super(props);
  }

  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={[indicatorStyles.line, this.props.style]} />
      </View>
    );
  }
}
