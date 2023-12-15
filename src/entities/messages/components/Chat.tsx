import { MessagesList } from "entities/messages/components/MessagesList.tsx";
import { CreateMessage } from "entities/messages/components/CreateMessage.tsx";

export function Chat() {
    return <div className="chat">
        <MessagesList/>

        <div className="chat__footer">
            <CreateMessage/>
        </div>
    </div>
}
