import React, {Component} from 'react';
import {
  View,
  Text,
  BackHandler,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {closeConnection} from '../actions';
import AnimatedProgressWheel from 'react-native-progress-wheel';

class Stat extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick() {
    const {closeConnection, navigation} = this.props;
    navigation.goBack(null);
    closeConnection();
    return true;
  }

  render() {
    const {temperature} = this.props;
    const temp = temperature ? parseInt(temperature) : 20;
    return (
      <ImageBackground
        source={require('../../src/img/bgn.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.tempwrapper}>
          <AnimatedProgressWheel
            style={styles.cyrcule}
            size={220}
            width={40}
            progress={(0, temp)}
            animateFromValue={0}
            duration={3000}
            color={'yellow'}
            backgroundColor={'orange'}
          />
          <Text style={styles.tempStatus}>{temp}°C</Text>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  const {temperature} = state;
  return {
    temperature,
  };
};

const mapDispatchToProps = {closeConnection};

const styles = StyleSheet.create({
  tempwrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  tempStatus: {
    position: 'absolute',
    color: '#fff',
    fontSize: 22,
  },
  cyrcule: {
    position: 'relative',
    borderRadius: 1000,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Stat);
