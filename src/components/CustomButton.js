import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import PropTypes from 'prop-types';

const CustomButton = (props) => {
    const style = StyleSheet.create({
        button: {
            width: "40%",
            borderRadius: 3,
            padding: 8,
            backgroundColor: props.buttonColor ? props.buttonColor : "#fd746c",
        },
        text: {
            color: "white",
            textAlign: "center",
        }
    }); 
 
    return (
        <TouchableOpacity 
            style={style.button}
            onPress={props.onPress}
            {...props}
        >
            <Text style={style.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

CustomButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

export default CustomButton;