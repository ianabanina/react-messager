import {Avatar} from "antd";

interface IComponentProps {
    description: string;
    date: string;
    header?: string;
    isAvatarOnRight?: boolean;
    avatarText?: string;
    onAvatarClick?: () => void;
    onHeaderClick?: () => void;
}

export function Card(props: IComponentProps) {
    const {header, description, date, isAvatarOnRight, avatarText, onAvatarClick, onHeaderClick} = props;

    return <div className={`card-wrapper ${isAvatarOnRight ? 'card-wrapper_right' : ''}`}>
        <div className={`card ${isAvatarOnRight ? 'card_right' : ''}`}>
            {avatarText && <div className={'card__avatar'}>
                <Avatar className={` ${onAvatarClick ? 'c-pointer' : undefined}`}
                        onClick={onAvatarClick}>
                    {avatarText}
                </Avatar>
            </div>}

            <div className={'card__content'}>
                {header &&
                    <div className={`card__header ${onHeaderClick ? 'c-pointer' : undefined}`} onClick={onHeaderClick}>
                        {header}
                    </div>}

                <div className={'card__description'}>
                    {description}
                </div>

                <div className={'card__date'}>
                    {date}
                </div>
            </div>
        </div>
    </div>
}
