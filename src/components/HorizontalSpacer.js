import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const HorizontalSpacer = (props) => {
    const style = StyleSheet.create({
        container: {
            width: props.width,
        }
    })

    return (
        <View style={style.container}/>
    );
}

HorizontalSpacer.propTypes = {
    width: PropTypes.any.isRequired,
}

export default HorizontalSpacer;