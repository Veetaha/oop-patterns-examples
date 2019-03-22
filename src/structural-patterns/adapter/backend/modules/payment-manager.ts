import * as I from '@modules/interfaces';

// Concrete Adapter
export class PaymentManager implements I.PaymentManager {
    takeFee(payer: I.Passenger) {
        return payer.payForTransition();
    }
}