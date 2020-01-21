import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {FeatchData} from '../actions';
import {connect} from 'react-redux';

class Main extends Component {
  redirect = () => {
    const {navigation} = this.props;
    return navigation.navigate('Stat');
  };

  render() {
    const {FeatchData, cnn_status} = this.props;
    return (
      <View style={styles.viewWrapper}>
        <Button title="Create Connection" onPress={() => FeatchData()} />
        {cnn_status && this.redirect()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {cnn_status} = state;
  return {cnn_status};
};

const mapDispatchToProps = {FeatchData};

const styles = StyleSheet.create({
  viewWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
