import {Card} from "common/components/Card.tsx";
import {formatDateForChat} from "common/helpers/Date.helpers.ts";

interface IComponentProps {
    date: string;
    text: string;
}

export function MessageCard(props: IComponentProps) {
    const {text, date} = props;

    return <Card description={text} date={formatDateForChat(date)}/>
}
