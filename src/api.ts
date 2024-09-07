import axios from "axios"

const EXPO_PUBLIC_API_URL = process.env.EXPO_PUBLIC_API_URL;

export function fetchOrders() {
    return axios(`${EXPO_PUBLIC_API_URL}/orders`)
}

export function confirmDelivery(orderId: number) {
    return axios.put(`${EXPO_PUBLIC_API_URL}/orders/${orderId}/delivered`)
}