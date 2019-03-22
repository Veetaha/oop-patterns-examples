import { Log } from '@modules/debug';
import { PoliceDept } from '@modules/police-department';

const lapd = new PoliceDept('LAPD');

const freed = lapd.investigate('suicide at student hostel');
const unfreed =  lapd.investigate('suicide #2');

setTimeout(() => {
    lapd.free(freed);
    Log.info(`Freed ${freed.suspect.fullname}`);
}, 500);

setTimeout(() => {
    lapd.free(unfreed);
    Log.info(`Freed ${unfreed.suspect.fullname}`);
}, 3000);

