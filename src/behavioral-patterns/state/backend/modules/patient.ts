import * as I from '@app/interfaces';
import { Log } from '@modules/debug';
import { HealingPlan } from './healing-plan';

export class Patient {
    healingPlan = new HealingPlan;

    takeMedicine(weekDay: I.WeekDay) {
        this.healingPlan.setCurrentWeekDay(weekDay);
        const medicine = {
            morning: this.healingPlan.getMedicine(I.DayTime.Morning),
            evening: this.healingPlan.getMedicine(I.DayTime.Evening)
        };
        if (medicine.morning != null) {
            Log.info(`Patient took medicine #${medicine.morning} in the morning of day ${weekDay}`);
        } else {
            Log.error(`Falied to take morning medicine (there is no one planned for day ${weekDay})`);
        }
        if (medicine.evening != null) {
            Log.info(`Patient took medicine #${medicine.evening} in the evening of day ${weekDay}`);
        } else {
            Log.error(`Falied to take evening medicine (there is no one planned for day ${weekDay})`);
        }
    }
}