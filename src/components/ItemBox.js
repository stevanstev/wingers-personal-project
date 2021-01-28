import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HorizontalSpacer from './HorizontalSpacer';

const ItemBox = (props) => {
    const style = StyleSheet.create({
        container: {
            padding: 20,
            backgroundColor: "white",
            elevation: 7,
            marginBottom: 30,
            flexDirection: "row",
        },
        image: {
            width: 60,
            height: 60
        }
    });

    return (
        <View style={style.container}>
            <Image 
                source={{uri: props.uri}} 
                style={style.image} />
            <HorizontalSpacer width={30}/>
            <Text>{props.item}</Text>
        </View>
    );
}

export default ItemBox;