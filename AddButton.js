import React from "react";
import {StyleSheet, View} from "react-native";
import FloatButton from './components/FloatButton'
export default function App() {
    return (
        <View style={styles.container}>
            <FloatButton style={{bottom: 500}} />

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        position:"absolute",
        alignItems:"center",
       
    }
})