import {useGetMessagesQuery} from "entities/messages/Messages.transport.ts";
import {MessageCard} from "entities/messages/components/MessageCard.tsx";
import {List} from "antd";
import {useState} from "react";
import {USERS_MESSAGES_PER_PAGE} from "entities/messages/Messages.consts.ts";

interface IComponentProps {
    userId: string;
}

export function UsersMessagesList(props: IComponentProps) {
    const {userId} = props;
    const [page, setPage] = useState(1);
    const {data: messages, isLoading} = useGetMessagesQuery({
        authorId: userId,
        _page: page,
        _limit: USERS_MESSAGES_PER_PAGE
    });

    const isVisiblePagination = messages?.meta && messages.meta.lastPage > 1;

    return <>
        <h3>User's messages: </h3>

        <List
            pagination={isVisiblePagination ? {
                position: 'bottom',
                align: 'end',
                pageSize: messages?.meta?.limit,
                total: messages?.meta?.pageSize,
                current: messages?.meta?.page,
                onChange: setPage
            } : false}
            dataSource={messages?.data}
            loading={isLoading}
            renderItem={(message) => (
                <MessageCard text={message.text} date={message.date} key={message.id}/>
            )}
        />
    </>
}
