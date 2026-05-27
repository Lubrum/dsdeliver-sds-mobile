import React from 'react';
import { StyleSheet, Text, View, Alert, Linking, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { confirmDelivery } from '../api';
import { RootStackParamList } from '../navigation';

type Props = StackScreenProps<RootStackParamList, 'OrderDetails'>;

export default function OrderDetails({route, navigation}: Props) {

    const { order } = route.params

    const handleOnCancel = () => {
        navigation.navigate('Orders')
    }
    
    const handleConfirmDelivery = () => {
        confirmDelivery(order.id)
            .then(() => {
                Alert.alert(`Pedido ${order.id} confirmado com sucesso!`)
                navigation.navigate('Orders');
            })
            .catch(() => {
                Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}`)
            })
    }

    const handleStartNavigation = () => {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
    }

    return (
        <>
        <Header />
            <View style={styles.container}>
                <OrderCard order={order} />
                <Pressable style={styles.button} onPress={handleStartNavigation}>
                    <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleConfirmDelivery}>
                    <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleOnCancel}>
                    <Text style={styles.buttonText}>CANCELAR</Text>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingRight: '5%',
      paddingLeft: '5%'
    },
    button: {
      backgroundColor: '#DA5C5C',
      flexDirection: 'row',
      borderRadius: 10,
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center'
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
      //fontFamily: 'OpenSans_700Bold'
    }
  });
