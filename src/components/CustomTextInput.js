import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const CustomTextInput = (props) => {
    return <TextInput 
        style={style.textInput}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        {...props}
    />;
}

const style = StyleSheet.create({
    textInput: {
        borderColor: "lightgray",
        borderWidth: 1,
        borderStyle: "solid",
        width: "75%",
        fontSize: 16,
        padding: 9,
        color: "#606c88",
        borderRadius: 3,
    }
});

CustomTextInput.propTypes = {
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
};

export default CustomTextInput;