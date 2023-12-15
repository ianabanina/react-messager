import {RadioChangeEvent} from "antd";
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

    const onChangeAuthor = ({target: {value}}: RadioChangeEvent) => {
        const {updateFilters} = props;

        updateFilters(value === EFilterByAuthorOption.All ? undefined : {"authorId": CURRENT_USER_ID});
    };

    return <div className={'messages-filters'}>
        <Radio.Group
            options={filterByAuthorOptions}
            onChange={onChangeAuthor}
            value={filters?.authorId === CURRENT_USER_ID ? EFilterByAuthorOption.I : EFilterByAuthorOption.All}
            optionType="button"
            buttonStyle="solid"
        />
    </div>
}
