import * as Faker from 'faker';
import { CoreChat } from "@modules/chat";
import { User } from '@modules/user';
import { ColorizedChat, Color } from '@modules/decorators/chat/colorized';
import { FontStyledChat } from '@modules/decorators/chat/font-styled';
import { FontSizedChat } from '@modules/decorators/chat/font-sized';


const colorizedChat = new ColorizedChat(new FontSizedChat(new FontStyledChat(new CoreChat, 
    'Consolas'), 28), Color.Gray
);
colorizedChat.init();

setInterval(() => {
    colorizedChat.sendColorizedMessage(
        {
            issuer: new User,
            text: Faker.lorem.sentence()
        },
        ColorizedChat.randomColor()
    )
}, 2000);
