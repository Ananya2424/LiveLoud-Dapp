import React from "react";
import { View,Text,  TouchableWithoutFeedback, StyleSheet, Animated } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FloatButton extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
       <TouchableWithoutFeedback>
        <Animated.View style = {[styles.button, styles.menu]}>
          <Icon name ="plus" size={24} color="#FFF" />
        </Animated.View>
       </TouchableWithoutFeedback>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
     position:"absolute",
     alignItems: 'center',
  },
  button: {
    position: "absolute",
    width:60,
    height:60,
    borderRadius : 60/2,
    alignItems:"center",
    justifyContent:"center",
    shadowRadius: 10,
    shadowColor:"#F02A4B",
    shadowOpacity:0.3,
    shadowOffset:{height:10}
  },
  menu: {
    backgroudColor:"#FO2A4B"
  }
})
