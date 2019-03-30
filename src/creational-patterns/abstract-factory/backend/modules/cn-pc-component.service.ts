import * as I from '@app/interfaces';
import { AmdCpu } from '@modules/cpu';
import { AmdGpu } from '@modules/gpu';
import { Service } from 'typedi';

// ConcreteFactoryB
@Service()
export class CnPcComponentService implements I.PcComponentsService {
    getCpu() {
        return new AmdCpu;
    }

    getGpu() {
        return new AmdGpu;
    }
}