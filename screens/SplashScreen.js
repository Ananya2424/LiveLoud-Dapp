import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/logo.png')} style={styles.image} />
    </View>
  );
};



export default SplashScreen;