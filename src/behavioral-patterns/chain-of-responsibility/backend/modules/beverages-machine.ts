import { WaterTank } from "@modules/water-tank";
import { Log } from '@modules/debug';

export class BeveragesMachine {
    waterTanks = new WaterTank(1, new WaterTank(2, new WaterTank(3)));


    getCupOfTea() {
        if (this.waterTanks.getCupOfWater()) {
            Log.info("Don't forget to take your tea");
            return true;
        } else {
            Log.info("Refill the watter tanks please");
            return false;
        }
    }
}