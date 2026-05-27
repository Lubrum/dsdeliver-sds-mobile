import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../Header';
import { RootStackParamList } from '../navigation';

export default function Home() {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleOnPress = () => {
        navigation.navigate('Orders')
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Image source={require('../assets/deliveryman.png')} />
                <Text style={styles.title}>
                    Acompanhe os pedidos e {'\n'} entregue em tempo real</Text>
                <Text style={styles.subTitle}>
                    Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão
                </Text>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>VER PEDIDOS</Text>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        alignItems: 'center'
    },
    title: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
    },
    subTitle: {
        color: '#9E9E9E',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        textAlign: 'center'
    },
    footer: {
        marginTop: '5%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24
    }
});
