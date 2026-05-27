import { Order } from './types';

const EXPO_PUBLIC_API_URL = process.env.EXPO_PUBLIC_API_URL;

async function request<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${EXPO_PUBLIC_API_URL}${path}`, init);

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
}

export function fetchOrders() {
    return request<Order[]>('/orders');
}

export async function confirmDelivery(orderId: number) {
    const response = await fetch(`${EXPO_PUBLIC_API_URL}/orders/${orderId}/delivered`, {
        method: 'PUT'
    });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }
}
