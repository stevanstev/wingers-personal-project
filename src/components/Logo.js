import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const Logo = (props) => {
    return <Ionicons 
        name="fast-food" 
        size={props.size} 
        color="#e65c00" 
    />;
}

Logo.propTypes = {
    size: PropTypes.number.isRequired,
}

export default Logo;