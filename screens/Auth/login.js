import React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import { AuthClient } from '@dfinity/auth-client';
import Web3 from 'web3';

const LoginScreen = () => {
    const handleICPLogin = async () => {
        const authClient = await AuthClient.create();
        authClient.login({
            onSuccess: () => {
                console.log('Logged in with Internet Identity');
            }
        });
    };

    const handleMetaMaskLogin = async () => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.enable();
                const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0) {
                    console.log('Logged in with MetaMask');
                }
            } catch (error) {
                console.error('User denied account access:', error);
            }
        } else {
            console.log('MetaMask is not installed!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <Pressable onPress={handleICPLogin}>
                <Image source={require('./ic_logo.jpg')} style={styles.logo} />
                <Text style={styles.buttonText}>Sign in with Internet Identity</Text>
            </Pressable>
            <Pressable onPress={handleMetaMaskLogin} style={styles.button}>
                <Image source={require('./metamask.jpg')} style={styles.logo} />
                <Text style={styles.buttonText}>Sign in with MetaMask</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
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
