import { Service } from "typedi";
import { Pc } from '@modules/pc';
import { CnPcComponentService } from "@modules/cn-pc-component.service";
import { UsPcComponentService } from '@modules/us-pc-component.service';

// Client
@Service() 
export class PcAssembler {
    constructor(
        private readonly usPcComponents: UsPcComponentService,
        private readonly cnPcComponents: CnPcComponentService
    ) {}

    createPc(budget: number) {
        return budget > 1000 
            ? new Pc(this.usPcComponents.getCpu(), this.usPcComponents.getGpu())
            : new Pc(this.cnPcComponents.getCpu(), this.cnPcComponents.getGpu());
    }

}