import {Button} from "antd";
import {MessagesList} from "entities/messages/components/MessagesList.tsx";

export function Chat() {
    return <div className={'chat'}>
        <div className={'chat__messages'}>
           <MessagesList />
        </div>

        <div className={'chat__footer'}>
            <Button type={'primary'}>Add new message</Button>
        </div>
    </div>
}
