export * from '@common/interfaces';

// AbstractProductA
export interface Cpu {
    readonly generation: number;
}

// AbstractProductB
export interface Gpu {
    readonly videoMemory: number;
}

// Abstract factory
export interface PcComponentsService {
    getCpu(): Cpu;
    getGpu(): Gpu;
}