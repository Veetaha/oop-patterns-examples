import _ from 'lodash';
import * as MathJS from 'mathjs';
import { Log } from '@modules/debug';
import { Collector, Profession } from '@modules/collector';
import { PupilParent } from '@modules/pupil-parent';

const headmaster = new Collector('Murashkina Elena', Profession.Headmaster);
const headTeachers = [
    new Collector('Tamara Ivanovna',   Profession.HeadTeacher),
    new Collector('Larisa Victorovna', Profession.HeadTeacher),
];

[
    [
        new Collector('Oxana Anatolievna', Profession.ClassroomTeacher),
        new Collector('Oxana Igorevna',    Profession.ClassroomTeacher),
    ], 
    [ 
        new Collector('Elena Anatolievna', Profession.ClassroomTeacher) 
    ]
]
    .forEach((classTeachers, i) => {    
        classTeachers.forEach(classTeacher => {

            _.times(MathJS.randomInt(5, 30), () => classTeacher.addComponent(
                new PupilParent(MathJS.randomInt(20, 100))
            ));

            headTeachers[i].addComponent(classTeacher);

        });
    });

headTeachers.forEach(headTeacher => headmaster.addComponent(headTeacher));

Log.info(`Headmaster collected ${headmaster.collectMoney()}$`);
