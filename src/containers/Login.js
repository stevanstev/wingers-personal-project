import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import VerticalSpacer from '../components/VerticalSpacer';
import CustomButton from '../components/CustomButton';
import CustomLoadingCircular from '../components/CustomLoadingCircular';
import Logo from '../components/Logo';
import CustomText from '../components/CustomText';
import { Actions } from 'react-native-router-flux';
import PressableIcon from '../components/PressableIcon';
import HorizontalSpacer from '../components/HorizontalSpacer';

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

    useEffect(() => {
        return () => {};
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
        Actions.home({type: 'reset'});
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
                            <PressableIcon 
                                iconName="logo-google"
                                iconSize={32}
                                iconColor="red"
                                iconOnPress={() => console.log("Hit Google API")}/>
                            <HorizontalSpacer width={35} />
                            <PressableIcon 
                                iconName="logo-facebook"
                                iconSize={32}
                                iconColor="blue"
                                iconOnPress={() => console.log("Hit Facebook API")}/>
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