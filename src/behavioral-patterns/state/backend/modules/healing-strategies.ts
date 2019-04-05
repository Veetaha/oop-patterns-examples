import * as I from '@app/interfaces';

// Concrete States

export class MondayHealingStrategy implements I.HealingStrategy {
    getMedicineType(dayTime: I.DayTime) {
        return dayTime === I.DayTime.Morning ? 1 : 4;
    }
}
export class TuesdayHealingStrategy implements I.HealingStrategy {
    getMedicineType(dayTime: I.DayTime) {
        return dayTime === I.DayTime.Morning ? 2 : 4;
    }
}
export class WednesdayHealingStrategy implements I.HealingStrategy {
    getMedicineType(dayTime: I.DayTime) {
        return dayTime === I.DayTime.Morning ? 3 : 4;
    }
}
export class ThursdayHealingStrategy implements I.HealingStrategy {
    getMedicineType(dayTime: I.DayTime) {
        return dayTime === I.DayTime.Morning ? 1 : 4;
    }
}
export class FridayHealingStrategy implements I.HealingStrategy {
    getMedicineType(dayTime: I.DayTime) {
        return dayTime === I.DayTime.Morning ? 2 : 4;
    }
}
export class SaturdayHealingStrategy implements I.HealingStrategy {
    getMedicineType(dayTime: I.DayTime) {
        return dayTime === I.DayTime.Morning ? 3 : 4;
    }
}
export class SundayHealingStrategy implements I.HealingStrategy {
    getMedicineType() {
        return null;
    }
}
