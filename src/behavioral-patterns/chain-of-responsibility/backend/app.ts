import '@app/polyfills';
import { BeveragesMachine } from '@modules/beverages-machine';

const bevMachine = new BeveragesMachine;

while (bevMachine.getCupOfTea()) 
{}
