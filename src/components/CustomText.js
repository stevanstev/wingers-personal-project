import React from "react";
import {StyleSheet, Text} from "react-native";
import PropTypes from "prop-types";

const CustomText = (props) => {
    const style = StyleSheet.create({
        textStyle: {
            fontSize: props.fontSize,
            color: "#606c88",
        }
    });
    
    return <Text     
        style={style.textStyle} 
        {...props}>{props.text}
    </Text>;
}

CustomText.propTypes = {
    text: PropTypes.string.isRequired,
}

export default CustomText;