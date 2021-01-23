import React from 'react';
import { View, StyleSheet, Text, Button } from "react-native";
import { Actions } from 'react-native-router-flux';
import CustomButton from '../components/CustomButton';
import Logo from '../components/Logo';
import VerticalSpacer from '../components/VerticalSpacer';

const LandingPage = () => {
    const navigateToLogin = () => {
        Actions.login()
    }

    return (
        <View style={style.container}>
            <Logo 
                size={38}/>
            <VerticalSpacer 
                top={10}
                bottom={10}/>
            <Text style={style.welcomeText}>Now, you can order chicken's wings from your home</Text>
            <VerticalSpacer 
                top={5}
                bottom={5}/>
            <CustomButton 
                onPress={navigateToLogin}
                title="Order Now"/>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    welcomeText: {
        fontSize: 18,
        color: "#606c88",   
        marginBottom: 10, 
        textAlign: "center",
        paddingLeft: 30, 
        paddingRight: 30, 
    },
    startButton: {
        borderRadius: 10,
    }
});

export default LandingPage;