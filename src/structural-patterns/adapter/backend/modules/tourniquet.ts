import * as I from '@modules/interfaces';
import { Log } from '@modules/debug';
import { PaymentManager } from '@modules/payment-manager';

// Client
export class Tourniquet {
    private paymentMgr = new PaymentManager;

    tryPass(passenger: I.Passenger) {
        if (this.paymentMgr.takeFee(passenger)) {
            Log.info(`Passenger ${passenger.name} has passed the tourniquet.`);
        } else {
            Log.warning(`Passenger ${passenger.name} has failed to pay.`)
        }
    }   
}