import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {FeatchData} from '../actions';
import {connect} from 'react-redux';

class Main extends Component {
  render() {
    const {FeatchData, temperature} = this.props;
    return (
      <View style={styles.viewWrapper}>
        <Button title="Create Connection" onPress={() => FeatchData()} />
        {temperature && <Text>{temperature}</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {temperature} = state;
  return {temperature};
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
