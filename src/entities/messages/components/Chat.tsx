import {MessagesList} from "entities/messages/components/MessagesList.tsx";
import {AddMessageBtn} from "entities/messages/components/AddMessageBtn.tsx";

export function Chat() {
    return <div className={'chat'}>
        <MessagesList/>

        <div className={'chat__footer'}>
            <AddMessageBtn/>
        </div>
    </div>
}
