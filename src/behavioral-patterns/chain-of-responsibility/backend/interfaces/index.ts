export * from '@common/interfaces';
import { Nullable } from '@common/interfaces';


export interface WaterSource {
    successor: Nullable<WaterSource>;

    getCupOfWater(): void;
}