export * from '@common/interfaces';

// Adaptee
export interface Passenger {
    name: string;
    payForTransition(): boolean;
}


// Target
export interface PaymentManager {
    takeFee(payer: Passenger): boolean;
}
