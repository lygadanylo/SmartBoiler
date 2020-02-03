import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const StartBtn = props => {
  const content = (
    <View style={styles.btnView}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
  return (
    <TouchableOpacity onPress={props.FeatchData}>{content}</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnView: {
    width: 175,
    height: 45,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FF7816',
  },
  text: {
    fontSize: 18,
  },
});

export default StartBtn;
