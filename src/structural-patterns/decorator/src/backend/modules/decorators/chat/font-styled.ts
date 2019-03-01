import * as I from '@modules/interfaces';
import { BasicChat } from "@modules/decorators/chat/basic-chat";


export class FontStyledChat extends BasicChat {

    constructor(fontStyleTarget: I.Chat, private defaultFontStyle?: I.Maybe<string>) {
        super(fontStyleTarget);
    } 

    sendMessage(message: I.Message) {
        return this.defaultFontStyle == null ?
            super.sendMessage(message)       :
            this.sendFontStyledMessage(message, this.defaultFontStyle);
    }

    sendFontStyledMessage(message: I.Message, fontStyle: string) {
        super.sendMessage(FontStyledChat.getFontStyledMessage(message, fontStyle));
    }


    private static getFontStyledMessage(message: I.Message, fontStyle: string) {
        return {
            ...message,
            text: `${message.text} [with font-style: ${fontStyle}]`
        }       
    }
}