import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import OrderCard from '../OrderCard';
import { fetchOrders } from '../api';
import { Order } from '../types';
import { Alert } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';

export default function Orders() {

    const [orders, setOrders] = useState<Order[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const isFocused = useIsFocused();

    const fetchData = () => {
        setIsLoading(true)
        fetchOrders()
            .then(setOrders)
            .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        if (isFocused) {
            fetchData()
        }
    } , [isFocused]);

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', {
           order
        })
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text>Buscando pedidos...</Text>
                    ) : (
                        orders.map(order => (
                        <Pressable
                            key={order.id} 
                            onPress={() => handleOnPress(order)}
                        >
                            <OrderCard order={order} />
                        </Pressable>
                    )
                ))}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
});
