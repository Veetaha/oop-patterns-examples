import * as I from '@app/interfaces';

export class Pc {
    constructor(
        readonly cpu: I.Cpu,
        readonly gpu: I.Gpu
    ) {}
}