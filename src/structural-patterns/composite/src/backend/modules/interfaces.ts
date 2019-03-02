export * from '@common/interfaces';
// export only backend-related types here

export interface Composite {

    addComponent(component: Composite): void;

    childrenAmount(): number;

    getChild(index: number): Composite;
    
    forEachChild(...args: Parameters<Array<Composite>['forEach']>): void;
}

export interface Collectable {
    collectMoney(): number;
}