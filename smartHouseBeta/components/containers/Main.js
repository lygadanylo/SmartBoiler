import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FeatchData} from '../actions';
import {connect} from 'react-redux';
import StartBtn from '../buttons/startBtn';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };
  redirect = () => {
    const {navigation} = this.props;
    return navigation.navigate('Stat');
  };

  render() {
    const {FeatchData, cnn_status} = this.props;
    return (
      <View style={styles.viewWrapper}>
        <Text style={styles.title}>Smart Boiler</Text>
        <Image
          source={require('../../src/img/tachometer.png')}
          style={styles.imgStyle}></Image>
        <StartBtn FeatchData={FeatchData} text="Розпочнем"></StartBtn>
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
  imgStyle: {
    marginBottom: 40,
  },
  title: {
    position: 'absolute',
    top: 40,
    fontSize: 32,
    color: '#FF7816',
    fontWeight: 'bold',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
