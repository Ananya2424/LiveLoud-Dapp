import React, { useState} from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const FloatingButton = () => {

  const [icon_1] = useState(new Animated.Value(40));
  const [icon_2] = useState(new Animated.Value(40));
  const [icon_3] = useState(new Animated.Value(40));

  const [pop, setPop] = useState(false);

  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: (10, 100),
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 70,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: (-1,10),
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  return(
    <View style={{
      flex: 1
    }}>
      <Animated.View style={[styles.circle, { right: icon_1}]}>
        <TouchableOpacity>
          <Icon name="image" size={25} color="#000000" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, {  right: icon_2}]}>
        <TouchableOpacity>
          <Icon name="gif" size={30} color="#000000" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { right: icon_3}]}>
        <TouchableOpacity>
          <Icon name="volume-up" size={25} color="#000000" />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          pop === false ? popIn() : popOut();
        }}
      >
        <Icon name="comment" size={19} color="#000000" />
      </TouchableOpacity>
    </View>
  )

}

export default FloatingButton;

const styles = StyleSheet.create({
  circle: {
     backgroundColor: '#FFFF',
     width: 25,
     height: 25,
     position: 'absolute',
     bottom: 80,
     right: 40,
     top:-15,
     borderRadius: 80,
     justifyContent: 'center',
     alignItems: 'center',
  }
})
