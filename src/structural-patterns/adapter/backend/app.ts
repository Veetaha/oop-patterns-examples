import { Tourniquet } from '@modules/tourniquet';
import { CardPassenger } from '@modules/card-passenger';
import { TokenPassenger } from '@modules/token-passenger';

const tourniquet = new Tourniquet;

tourniquet.tryPass(new TokenPassenger({ tokensAmount: 2 }));
tourniquet.tryPass(new CardPassenger({ transitions: 5 }));

tourniquet.tryPass(new TokenPassenger({ tokensAmount: 0 }));
tourniquet.tryPass(new CardPassenger({ transitions: 0 }));