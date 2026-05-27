import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { RootStackParamList } from '../navigation';

export default function Header() {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleOnPress = () => {
        navigation.navigate('Home')
    }
    
    return (
        <Pressable onPress={handleOnPress}>
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} />
                <Text style={styles.text}>DS Delivery</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA5C5C',
        height: 90,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#FFF',
        marginLeft: 15
        //fontFamily: 'OpenSans_700Bold'
    }
});
