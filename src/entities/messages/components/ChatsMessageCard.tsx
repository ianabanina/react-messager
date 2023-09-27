import {Card} from "common/components/Card.tsx";
import {getFullName, getUserInitials} from "entities/users/helpers/Users.helpers.ts";
import {Link, useNavigate} from "react-router-dom";
import {IChatUser} from "entities/users/Users.models.ts";
import {formatDateForChat} from "common/helpers/Date.helpers.ts";
import {CURRENT_USER_ID} from "common/const/Base.const.ts";
import {ERoutes} from "common/const/Router.const.ts";

interface IComponentProps {
    date: string;
    text: string;
    author: IChatUser;
}

export function ChatsMessageCard(props: IComponentProps) {
    const {text, author, date} = props;
    const isCurrentUser = author.id === CURRENT_USER_ID;
    const fullName = getFullName(author.firstName, author.lastName);
    const initials = getUserInitials(author.firstName, author.lastName);
    const navigate = useNavigate();

    const redirectToUserPage = () => {
        navigate(`/user/${author.id}`);
    }

    return <Card header={isCurrentUser ? undefined : <Link to={`${ERoutes.User}/${author.id}`}>{fullName}</Link>}
                 description={text}
                 isAvatarOnRight={isCurrentUser}
                 avatarText={initials}
                 date={formatDateForChat(date)}
                 onAvatarClick={redirectToUserPage}
                 onHeaderClick={redirectToUserPage}
    />
}
