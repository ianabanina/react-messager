import {Avatar} from "antd";
import {ReactNode} from "react";

interface IComponentProps {
    description: string | ReactNode;
    date: string;
    header?: string;
    isAvatarOnRight?: boolean;
    avatarText?: string;
    onAvatarClick?: () => void;
    onHeaderClick?: () => void;
    cardWithBg?: boolean;
}

export function Card(props: IComponentProps) {
    const {
        header,
        description,
        date,
        isAvatarOnRight,
        avatarText,
        cardWithBg,
        onAvatarClick,
        onHeaderClick
    }
        = props;

    return <div className={`card-wrapper ${isAvatarOnRight ? 'card-wrapper_right' : ''}`}>
        <div className={`card ${isAvatarOnRight ? 'card_right' : ''}`}>
            {avatarText && <div className={'card__avatar'}>
                <Avatar className={` ${onAvatarClick ? 'c-pointer' : undefined}`}
                        onClick={onAvatarClick}>
                    {avatarText}
                </Avatar>
            </div>}

            <div className={`card__content ${cardWithBg ? 'card__content_bright' : ''}`}>
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
