import {useGetMessagesQuery} from "entities/messages/Messages.transport.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import {MessagesFilters} from "entities/messages/components/MessagesFilters.tsx";
import {useState} from "react";
import {TGetMessagesParams} from "entities/messages/Messages.models.ts";
import {ChatsMessageCard} from "entities/messages/components/ChatsMessageCard.tsx";

export function MessagesList() {
    const [filters, setFilters] = useState<TGetMessagesParams>();
    const {data: messages} = useGetMessagesQuery(filters);

    // TODO: Add visual effect for an error and loading state

    if (!messages?.data.length) {
        return <div>No items</div>
    }

    return <>
        <MessagesFilters filters={filters} updateFilters={setFilters}/>

        <div className={'messages-list-wrapper'}>
            <InfiniteScroll
                dataLength={messages.data.length}
                next={() => {
                    // TODO: Get more items
                }}
                className={'messages-list'}
                inverse={true}
                hasMore={true} // TODO: Should depend on BE
                loader={<h4>Loading...</h4>}
            >
                {messages.data.map((message) =>
                    <ChatsMessageCard text={message.text} date={message.date} author={message.author}
                                      key={message.id}/>)}
            </InfiniteScroll>
        </div>
    </>
}
