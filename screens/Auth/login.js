import React from 'react';
import { View, Image, StyleSheet, Text, Pressable, Alert, Dimensions } from 'react-native';
import { AuthClient } from '@dfinity/auth-client';
import icLogo from './ic-logo.jpg';
import metamaskLogo from './metamask.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleICPLogin = async () => {
        // const authClient = await AuthClient.create();
        // authClient.login({
        //     onSuccess: () => {
        //         console.log('Logged in with Internet Identity');
        //         Alert.alert('Success', 'Logged in with Internet Identity');
        //     }
        // });
        navigation.navigate('Main');
    };

    const handleMetaMaskLogin = async () => {
        Alert.alert('MetaMask', 'MetaMask login is not supported in React Native.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <View style={styles.layer}>
                <View style={{width:'auto',height:'auto',position:'absolute',top:'20%'}}>        
                        <Pressable onPress={handleICPLogin} style={styles.button}>
                    <Image source={icLogo} style={styles.logo} />
                    <Text style={styles.buttonText}>Sign in with Internet Identity</Text>
                </Pressable>
                <Pressable onPress={handleMetaMaskLogin} style={styles.button}>
                    <Image source={metamaskLogo} style={styles.logo} />
                    <Text style={styles.buttonText}>Sign in with MetaMask</Text>
                </Pressable>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007bff',
        height: height,
        width: width,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
        textDecorationLine: 'underline',
    },
    layer: {
        position: 'absolute',
        top: '8%',
        borderTopLeftRadius: width * 0.1,
        borderTopRightRadius: width * 0.1,
        backgroundColor: '#f5f5f5',
        zIndex: 3,
        height: height * 0.9,
        width: width,
        alignItems: 'center',
    },
   
    logo: {
        width: 60,
        height: 60,
        marginBottom: 10,
        resizeMode:'cover'
    },
    button: {
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 16,
        marginTop: 10,
        color: '#007bff',
    },
});

export default LoginScreen;
