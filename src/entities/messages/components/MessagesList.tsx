import {useGetMessagesQuery} from "entities/messages/Messages.transport.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import {MessageCard} from "entities/messages/components/MessageCard.tsx";

export function MessagesList() {
    const {data: messages} = useGetMessagesQuery();

    // TODO: Add visual effect for an error and loading state

    if (!messages?.length) {
        return <div>No items</div>
    }

    return <InfiniteScroll
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
}
