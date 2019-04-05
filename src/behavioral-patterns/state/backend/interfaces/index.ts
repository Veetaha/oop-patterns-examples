export * from '@common/interfaces';
import { Nullable, Tag } from '@common/interfaces';

export type WeekDay = Tag<number, 'WeekDay'>; // 0 to 6

export const enum DayTime {
    Morning, Evening
}

// Context
export interface HealingStrategy {
    getMedicineType(dayTime: DayTime): Nullable<number>;
}
