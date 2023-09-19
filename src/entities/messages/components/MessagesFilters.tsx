import {RadioChangeEvent} from "antd";
import {useState} from "react";
import {Radio} from 'antd';
import {TGetMessagesParams} from "entities/messages/Messages.models.ts";
import {CURRENT_USER_ID} from "common/const/Base.const.ts";
import {EFilterByAuthorOption, filterByAuthorOptions} from "entities/messages/Messages.consts.ts";

interface IComponentProps {
    filters: TGetMessagesParams;
    updateFilters: (filters: TGetMessagesParams) => void;
}

export function MessagesFilters(props: IComponentProps) {
    const {filters} = props;
    const [byAuthor, setByAuthor] = useState(
        filters?.["author.id"] === CURRENT_USER_ID ? EFilterByAuthorOption.I : EFilterByAuthorOption.All
    );

    const onChangeAuthor = ({target: {value}}: RadioChangeEvent) => {
        const {updateFilters} = props;

        setByAuthor(value);
        // I'd like to use authorId instead of "author.id", but it's necessary for mocked BE. Not production solution
        updateFilters(value === EFilterByAuthorOption.All ? undefined : {"author.id": CURRENT_USER_ID});
    };

    return <div className={'messages-filters'}>
        <Radio.Group
            options={filterByAuthorOptions}
            onChange={onChangeAuthor}
            value={byAuthor}
            optionType="button"
            buttonStyle="solid"
        />
    </div>
}
