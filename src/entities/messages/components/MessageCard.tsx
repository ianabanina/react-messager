import {Card} from "common/components/Card.tsx";
import {getFullName, getUserInitials} from "entities/users/helpers/Users.helpers.ts";
import {useNavigate} from "react-router-dom";
import {IChatUser} from "entities/users/Users.models.ts";

interface IComponentProps {
    date: string;
    text: string;
    author: IChatUser;
}

// TODO: Should get current user from BE
const currentUserId = "4";

export function MessageCard(props: IComponentProps) {
    const {text, author, date} = props;
    const isCurrentUser = author.id === currentUserId;
    const fullName = getFullName(author.firstName, author.lastName);
    const initials = getUserInitials(author.firstName, author.lastName);
    const navigate = useNavigate();

    const redirectToUserPage = () => {
        navigate('/user');
    }

    return <Card header={isCurrentUser ? undefined : fullName}
                 description={text}
                 isAvatarOnRight={isCurrentUser}
                 avatarText={initials}
                 date={date}
                 onAvatarClick={redirectToUserPage}
                 onHeaderClick={redirectToUserPage}
    />
}
