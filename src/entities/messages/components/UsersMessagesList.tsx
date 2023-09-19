import {useGetMessagesQuery} from "entities/messages/Messages.transport.ts";
import {MessageCard} from "entities/messages/components/MessageCard.tsx";
import {List} from "antd";
import {USERS_MESSAGES_PER_PAGE} from "entities/messages/Messages.consts.ts";

interface IComponentProps {
    userId: string;
}

export function UsersMessagesList(props: IComponentProps) {
    const {userId} = props;
    const {data: messages,} = useGetMessagesQuery({"author.id": userId});

    // TODO: Add visual effect for an error and loading state
    if (!messages?.length) {
        return <div>No items</div>
    }

    const isVisiblePagination = messages.length > USERS_MESSAGES_PER_PAGE;

    return <>
        <h3>User's messages: </h3>

        <List
            // There is FE pagination. But it will be better to use limit + offset like query params on BE
            pagination={isVisiblePagination ? {position: 'bottom', align: 'end', pageSize: USERS_MESSAGES_PER_PAGE} : false}
            dataSource={messages}
            renderItem={(message) => (
                <MessageCard text={message.text} date={message.date} key={message.id}/>
            )}
        />
    </>
}
