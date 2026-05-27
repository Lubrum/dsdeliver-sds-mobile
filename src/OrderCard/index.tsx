import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Order } from '../types';

const relativeTimeFormatter = new Intl.RelativeTimeFormat('pt-BR', {
    numeric: 'auto'
});

type Props = {
    order: Order;
}

function dateFromNow(date: string) {
    const value = new Date(date).getTime();

    if (Number.isNaN(value)) {
        return '';
    }

    const diffInSeconds = Math.round((value - Date.now()) / 1000);
    const absDiffInSeconds = Math.abs(diffInSeconds);

    if (absDiffInSeconds < 60) {
        return relativeTimeFormatter.format(diffInSeconds, 'second');
    }

    const diffInMinutes = Math.round(diffInSeconds / 60);
    const absDiffInMinutes = Math.abs(diffInMinutes);

    if (absDiffInMinutes < 60) {
        return relativeTimeFormatter.format(diffInMinutes, 'minute');
    }

    const diffInHours = Math.round(diffInMinutes / 60);
    const absDiffInHours = Math.abs(diffInHours);

    if (absDiffInHours < 24) {
        return relativeTimeFormatter.format(diffInHours, 'hour');
    }

    const diffInDays = Math.round(diffInHours / 24);
    const absDiffInDays = Math.abs(diffInDays);

    if (absDiffInDays < 30) {
        return relativeTimeFormatter.format(diffInDays, 'day');
    }

    const diffInMonths = Math.round(diffInDays / 30);
    const absDiffInMonths = Math.abs(diffInMonths);

    if (absDiffInMonths < 12) {
        return relativeTimeFormatter.format(diffInMonths, 'month');
    }

    return relativeTimeFormatter.format(Math.round(diffInMonths / 12), 'year');
}

export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })
    return formatter.format(price);
}

export default function OrderCard({ order }: Props) {

    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Text style={styles.orderName}>Pedido {order.id}</Text>
                <Text style={styles.orderPrice}>{formatPrice(order.total)}</Text>
            </View>
            <Text style={styles.text}>{dateFromNow(order.moment)}</Text>
            <View style={styles.productsList}>
                {order.products.map(product => (
                    <Text key={product.id} style={styles.text}>{product.name}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            marginTop: '10%',
            marginLeft: '2%',
            marginRight: '2%',
            marginBottom: '2%',
            padding: 15,
            backgroundColor: '#FFF',
            shadowOpacity: 0.25,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 20,
            borderRadius: 10,
            elevation: 5
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        text: {
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 19,
            letterSpacing: -0.24,
            color: '#9E9E9E'
            //fontFamily: 'OpenSans_400Regular'
        },
        orderName: {
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 25,
            letterSpacing: -0.24,
            color: '#263238'
            //fontFamily: 'OpenSans_700Bold'
        },
        orderPrice: {
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 25,
            textAlign: 'right',
            letterSpacing: -0.24,
            color: '#DA5C5C'
            //fontFamily: 'OpenSans_700Bold'
        },
        productsList: {
            borderTopColor: '#E6E6E6',
            borderTopWidth: 1,
            marginTop: 20,
            paddingTop: 15
        }
    }
);
