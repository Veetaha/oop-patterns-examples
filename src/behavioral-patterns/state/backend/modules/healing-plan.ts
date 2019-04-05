import * as I from '@app/interfaces';
import Container from 'typedi';
import { 
    MondayHealingStrategy, 
    TuesdayHealingStrategy, 
    WednesdayHealingStrategy, 
    ThursdayHealingStrategy, 
    FridayHealingStrategy,
    SaturdayHealingStrategy, 
    SundayHealingStrategy 
} from '@modules/healing-strategies';

// Context
export class HealingPlan {
    setCurrentWeekDay(weekDay: I.WeekDay) {
        this.currentStrategy = this.weekStrategies[weekDay];
    }

    private readonly weekStrategies = [
        Container.get(MondayHealingStrategy),
        Container.get(TuesdayHealingStrategy),
        Container.get(WednesdayHealingStrategy),
        Container.get(ThursdayHealingStrategy),
        Container.get(FridayHealingStrategy),
        Container.get(SaturdayHealingStrategy),
        Container.get(SundayHealingStrategy),
    ] as const;

    private currentStrategy: I.HealingStrategy = this.weekStrategies[0];


    getMedicine(dayTime: I.DayTime) {
        return this.currentStrategy.getMedicineType(dayTime);
    }
}