import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const CustomLoadingCircular = (props) => {
    return <AnimatedCircularProgress
        size={45}
        width={6}
        fill={props.fill}
        tintColor="#e65c00"
        onAnimationComplete={props.onAnimationComplete}
        backgroundColor="#3d5875" 
        {...props} />;
}

export default CustomLoadingCircular;