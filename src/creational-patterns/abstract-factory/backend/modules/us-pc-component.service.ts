import * as I from '@app/interfaces';
import { IntelCpu } from '@modules/cpu';
import { NvidiaGpu } from '@modules/gpu';
import { Service } from 'typedi';

// ConcreteFactoryA
@Service()
export class UsPcComponentService implements I.PcComponentsService {
    getCpu() {
        return new IntelCpu;
    }

    getGpu() {
        return new NvidiaGpu;
    }
}