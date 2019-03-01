import _ from 'lodash';
import Colors from 'colors/safe';
import * as MathJS from 'mathjs';
import * as I from '@modules/interfaces';
import { BasicChat } from "@modules/decorators/chat/basic-chat";

export const enum Color { Yellow, Gray, Blue, Green, Min = Yellow, Max = Green }

export class ColorizedChat extends BasicChat {

    constructor(colorizeTarget: I.Chat, private defaultColor?: I.Maybe<Color>) {
        super(colorizeTarget);
    }

    sendMessage(message: I.Message) {
        return this.defaultColor == null ?
            super.sendMessage(message)   :
            this.sendColorizedMessage(message, this.defaultColor);
    }

    sendColorizedMessage(message: I.Message, color: Color) {
        return super.sendMessage(ColorizedChat.getColorizedMessage(color, message));
    }

    static randomColor() {
        return MathJS.randomInt(Color.Min, Color.Max + 1) as Color;
    }

    private static getColorizedMessage(color: Color, message: I.Message) {
        return { 
            ...message ,
            text: [
                Colors.yellow, 
                Colors.gray, 
                Colors.blue, 
                Colors.green
            ][color](message.text)
        };
    }

}