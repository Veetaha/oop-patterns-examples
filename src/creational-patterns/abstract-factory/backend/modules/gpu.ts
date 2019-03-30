import * as I from '@app/interfaces';

// ConcreteProductB
export class AmdGpu implements I.Gpu {
    readonly videoMemory = 1300;

}

// ConcreteProductB
export class NvidiaGpu implements I.Gpu {
    readonly videoMemory = 2500;
}