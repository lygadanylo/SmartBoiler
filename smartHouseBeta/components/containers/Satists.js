import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class Stat extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {temperature} = this.props;
    // temperature && console.log(temperature);
    return (
      <View>
        <Text>{temperature && temperature}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {temperature} = state;
  return {
    temperature,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Stat);
