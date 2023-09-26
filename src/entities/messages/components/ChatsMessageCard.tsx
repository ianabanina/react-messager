import {Card} from "common/components/Card.tsx";
import {getFullName, getUserInitials} from "entities/users/helpers/Users.helpers.ts";
import {useNavigate} from "react-router-dom";
import {IChatUser} from "entities/users/Users.models.ts";
import {formatDateForChat} from "common/helpers/Date.helpers.ts";
import {CURRENT_USER_ID} from "common/const/Base.const.ts";
import {Button} from "antd";
import {useSetIsFavoriteMutation} from "entities/messages/Messages.transport.ts";

interface IComponentProps {
    date: string;
    text: string;
    author: IChatUser;
    id: string;
    isFavorite: boolean;
}

export function ChatsMessageCard(props: IComponentProps) {
    const {text, author, date, isFavorite, id} = props;
    const [setIsFavorite] = useSetIsFavoriteMutation();
    const isCurrentUser = author.id === CURRENT_USER_ID;
    const fullName = getFullName(author.firstName, author.lastName);
    const initials = getUserInitials(author.firstName, author.lastName);
    const navigate = useNavigate();

    const redirectToUserPage = () => {
        navigate(`/user/${author.id}`);
    }

    const handleLike = () => {
        setIsFavorite({
            isFavorite: !isFavorite,
            id
        });
    };

    return <Card header={isCurrentUser ? undefined : fullName}
                 description={
                     <div className={'d-flex d-flex_justify-between gap-8'}>
                         <div>{text}</div>

                         <Button size={'small'} onClick={handleLike}>
                             {isFavorite ? 'unlike' : 'like'}
                         </Button>
                     </div>
                 }
                 isAvatarOnRight={isCurrentUser}
                 avatarText={initials}
                 date={formatDateForChat(date)}
                 onAvatarClick={redirectToUserPage}
                 onHeaderClick={redirectToUserPage}
                 cardWithBg={isFavorite}
    />
}
