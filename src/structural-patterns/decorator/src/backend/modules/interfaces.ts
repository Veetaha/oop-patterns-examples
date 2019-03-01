import { User } from '@modules/user';

export * from '@common/interfaces';
// export only backend-related types here

export interface Message {
    readonly issuer: User;
    readonly text:   string;
}

export interface Chat {
    init(): void;
    sendMessage(message: Message): void;
}