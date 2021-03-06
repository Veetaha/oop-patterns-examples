export { Maybe } from 'vee-type-safe';

export interface ClassType<TInstance = any, TArgs extends any[] = any[]> extends Function  {
    new (...args: TArgs): TInstance;
}

export type ClassPrototype<TClass extends ClassType = ClassType> = TClass['prototype'];