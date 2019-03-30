import 'reflect-metadata';
import { Container } from 'typedi';
import { SantaClaus } from '@modules/santa-claus';

const claus = Container.get(SantaClaus);

claus
    .populatePresents()
    .deliverPresents();