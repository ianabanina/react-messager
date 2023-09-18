import {useGetMessagesQuery} from "entities/messages/Messages.transport.ts";

export function Chat() {
    const {data: messages} = useGetMessagesQuery();

    if (!messages?.length) {
        return <div>No items</div>
    }

    return <div className={'chat'}>
        Chat
    </div>
}
