import * as I from '@app/interfaces';

// ConcreteProductA
export class AmdCpu implements I.Cpu {
    readonly generation = 7;

}

// ConcreteProductA
export class IntelCpu implements I.Cpu {
    readonly generation = 9;
}