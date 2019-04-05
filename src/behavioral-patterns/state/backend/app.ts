import '@app/polyfills';
import * as I from '@app/interfaces';
import { Patient } from '@modules/patient';

const patient = new Patient;

for (let i = 0; i < 7; ++i) {
    patient.takeMedicine(i as I.WeekDay);
}
