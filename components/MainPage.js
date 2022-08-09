import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import bgimg from '../assets/starry.jpg';

// Styles
import styles from './Styles'

const Main = ({ navigation, route }) => {

    let [fontsLoaded] = useFonts({
        Inter_900Black
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const button = Object.assign({fontFamily: 'Inter_900Black'}, styles.buttonText);


    return (
        <ImageBackground style={styles.container} source={bgimg} resizeMode='cover'>
            <View style={styles.loginButton}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={button} >Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.registerButton}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={button} >Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Main