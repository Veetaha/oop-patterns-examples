import '@app/polyfills';
import { Log } from '@modules/debug';
import { Container } from 'typedi';
import { Applicant } from '@modules/applicant';
import { EnterpreneurStrategy } from '@modules/enterpreneur-strategy';
import { ChildStrategy } from '@modules/child-strategy';

const enterpreneur = new Applicant(Container.get(EnterpreneurStrategy));
const child = new Applicant(Container.get(ChildStrategy));


Log.info(`Enterpreneur: ${enterpreneur.getDocuments()}`);
Log.info(`Child: ${child.getDocuments()}`);