import React, {Component} from 'react';
import {View, Text, BackHandler, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {closeConnection} from '../actions';
import ProgressCircle from 'react-native-progress-circle';

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
    const temp = temperature && parseInt(temperature);
    return (
      <View style={styles.tempwrapper}>
        <ProgressCircle
          percent={temp}
          radius={125}
          borderWidth={40}
          color="#3399FF"
          shadowColor="#999"
          bgColor="#fff">
          {temperature && <Text style={{fontSize: 18}}>{temperature}</Text>}
        </ProgressCircle>
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

const mapDispatchToProps = {closeConnection};

const styles = StyleSheet.create({
  tempwrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  tempStatus: {},
  cyrcule: {
    position: 'relative',
    width: 250,
    height: 250,
    borderRadius: 1000,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Stat);
