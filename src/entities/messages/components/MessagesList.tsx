import {useGetMessagesQuery} from "entities/messages/Messages.transport.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import {MessageCard} from "entities/messages/components/MessageCard.tsx";
import {MessagesFilters} from "./MessagesFilters.tsx";
import {useState} from "react";
import {TGetMessagesParams} from "../Messages.models.ts";

export function MessagesList() {
    const [filters, setFilters] = useState<TGetMessagesParams>();
    const {data: messages} = useGetMessagesQuery(filters);

    // TODO: Add visual effect for an error and loading state

    if (!messages?.length) {
        return <div>No items</div>
    }

    return <>
        <MessagesFilters filters={filters} updateFilters={setFilters}/>

        <div className={'messages-list-wrapper'}>
            <InfiniteScroll
                dataLength={messages.length}
                next={() => {
                    // TODO: Get more items
                }}
                className={'messages-list'}
                inverse={true}
                hasMore={true} // TODO: Should depend on BE
                loader={<h4>Loading...</h4>}
            >
                {messages.map((message) =>
                    <MessageCard text={message.text} date={message.date} author={message.author}
                                 key={message.id}/>)}
            </InfiniteScroll>
        </div>
    </>
}
