import { Order } from './types';

export type RootStackParamList = {
    Home: undefined;
    Orders: undefined;
    OrderDetails: {
        order: Order;
    };
};
