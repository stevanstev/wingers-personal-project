import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, Alert, Pressable } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import VerticalSpacer from '../components/VerticalSpacer';
import CustomButton from '../components/CustomButton';
import CustomLoadingCircular from '../components/CustomLoadingCircular';
import Logo from '../components/Logo';
import CustomText from '../components/CustomText';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [fill, setFill] = useState(0);

    useEffect(() => {
        setFill(100);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const changeUsernameHandler = (username) => {
        setUsername(username);
    }

    const changePasswordHandler = (password) => {
        setPassword(password);
    }

    const submitHandler = () => {
        /*
            @TODO
            Calling Login API 
        */
       console.log(username, password);
    }

    return (
        <View style={style.container}>
            {
                loading === true ?
                    <CustomLoadingCircular 
                        fill={fill}/>
                :
                    <React.Fragment>
                        <Logo 
                            size={40}/>
                        <VerticalSpacer 
                            top={10}
                            bottom={5}
                        />
                        <CustomText 
                            text="Wingers"
                            fontSize={28}
                        />
                        <VerticalSpacer 
                            top={10}
                            bottom={10}
                        />
                        <CustomTextInput 
                            textContentType="emailAddress"
                            maxLength={25}
                            autoFocus={true}
                            onChangeText={username => changeUsernameHandler(username)}
                            value={username}
                            placeholder="Email"/>
                        <VerticalSpacer 
                            top={10}
                            bottom={10}
                        />
                        <CustomTextInput 
                            textContentType="password"
                            secureTextEntry={true}
                            onChangeText={password => changePasswordHandler(password)}
                            value={password}
                            placeholder="Password"/>
                        <VerticalSpacer 
                            top={15}
                            bottom={10}
                        />
                        <CustomButton 
                            title="SIGN IN"
                            onPress={submitHandler}/>
                        <VerticalSpacer 
                            top={10}
                            bottom={10}
                        />
                        <CustomText
                            fontSize={15}
                            text="- Don't have any account ? -"/>
                         <VerticalSpacer 
                            top={8}
                            bottom={5}
                        />
                        <CustomButton 
                            title="SIGN UP"
                            buttonColor="#40E0D0"
                            onPress={() => console.log("Register")}/>
                         <VerticalSpacer 
                            top={10}
                            bottom={10}
                        />
                        <CustomText
                            fontSize={15}
                            text="- Or using -"/>
                        <VerticalSpacer 
                            top={10}
                            bottom={10}
                        />
                        <View style={{flexDirection: "row"}}>
                            <View>
                                <Pressable onPress={() => console.log("Hit Google API")}>
                                    <Ionicons 
                                        name="logo-google" 
                                        size={32} 
                                        color="red"/>
                                </Pressable>
                            </View>
                            <View style={{width: 35}}/>
                            <View>
                                <Pressable onPress={() => console.log("Hit Facebook API")}>
                                    <Ionicons 
                                        name="logo-facebook" 
                                        size={32} 
                                        color="blue"/>
                                </Pressable>
                            </View>
                        </View>
                    </React.Fragment>
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
        flex: 1,
    },
});

export default Login;