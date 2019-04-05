import { Log } from '@modules/debug';
import * as I from '@app/interfaces';

export class WaterTank implements I.WaterSource {
    constructor(
        private readonly id: number, 
        public successor?: I.Nullable<I.WaterSource>
    ) {}
    
    private waterMass = 100;

    getCupOfWater() {
        if (this.waterMass <= 0) {
            if (this.successor == null) {
                Log.error(`Water underflow error`);
                return false;
            }
            return this.successor.getCupOfWater();
        }

        this.waterMass -= 50;
        Log.info(`Took a cup of water from tank #${this.id}`);
        return true;
    }

}