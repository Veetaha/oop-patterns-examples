import { Toy } from '@modules/toy';
import { Bonbon } from '@modules/bonbon';

export * from '@common/interfaces';

// Prototype
export interface Clonable {
    clone(): this;
}

export type Present = Toy | Bonbon;