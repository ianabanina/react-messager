import {useGetMessagesQuery} from "entities/messages/Messages.transport.ts";
import {MessageCard} from "entities/messages/components/MessageCard.tsx";
import {List} from "antd";
import {PAGINATION_LIMIT_DEFAULT} from "common/const/Base.const.ts";
import {useState} from "react";

interface IComponentProps {
    userId: string;
}

export function UsersMessagesList(props: IComponentProps) {
    const {userId} = props;
    const [page, setPage] = useState(1);
    const {data: messages, isLoading} = useGetMessagesQuery({
        "author.id": userId,
        _page: page,
        _limit: PAGINATION_LIMIT_DEFAULT
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
