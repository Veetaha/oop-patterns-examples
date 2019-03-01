import * as I from '@modules/interfaces';
import { BasicChat } from "@modules/decorators/chat/basic-chat";


export class FontSizedChat extends BasicChat {

    constructor(fontSizedTarget: I.Chat, private defaultFontSize?: I.Maybe<number>) {
        super(fontSizedTarget);
    } 

    sendMessage(message: I.Message) {
        return this.defaultFontSize == null ?
            super.sendMessage(message)      :
            this.sendFontSizedMessage(message, this.defaultFontSize);
    }

    sendFontSizedMessage(message: I.Message, fontSize: number) {
        super.sendMessage(FontSizedChat.getFontSizedMessage(message, fontSize));
    }

    private static getFontSizedMessage(message: I.Message, fontSize: number) {
        return {
            ...message,
            text: `${message.text} [with font-size: ${fontSize}]`
        }       
    }
}