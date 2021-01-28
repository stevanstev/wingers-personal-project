import React from 'react';
import { Pressable, View } from "react-native"
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const PressableIcon = (props) => {
    return (
        <View>
            <Pressable onPress={props.onIconPress}>
                <Ionicons 
                    style={{borderRadius: 8, padding: 8, backgroundColor: props.backgroundColor ? props.backgroundColor : "transparent"}}
                    name={props.iconName} 
                    size={props.iconSize} 
                    color={props.iconColor}/>
            </Pressable>
        </View>
    );
}

Pressable.propTypes = {
    onIconPress: PropTypes.func.isRequired,
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.number.isRequired,
}

export default PressableIcon;