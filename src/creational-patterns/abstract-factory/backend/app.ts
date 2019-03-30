import 'reflect-metadata';
import { Log } from '@modules/debug';
import { PcAssembler } from '@modules/pc-assembler';
import { Container } from 'typedi';

const pcAssembler = Container.get(PcAssembler);
const lowEndPc  = pcAssembler.createPc(500);
const highEndPc = pcAssembler.createPc(1200);

Log.info(lowEndPc, 'Low end pc');
Log.info(highEndPc, 'High end pc');
