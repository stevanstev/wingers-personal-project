import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const VerticalSpacer = (props) => {
    const style = StyleSheet.create({
        margin: {
            marginBottom: props.bottom,
            marginTop: props.top,
        }
    });

    return <View 
        style={style.margin}
    />;
}

VerticalSpacer.propTypes = {
    bottom: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
}

export default VerticalSpacer;