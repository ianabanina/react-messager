import {Avatar, Card, Space} from "antd";
import {getFullName, getUserInitials} from "entities/users/helpers/Users.helpers.ts";
import {useGetUserQuery} from "entities/users/Users.transport.ts";

interface IComponentProps {
    id: string;
}

export function UserProfileInfo(props: IComponentProps) {
    const {id} = props;
    const {data: user} = useGetUserQuery(id)

    if (!user) {
        // TODO: Show error message if can't find user
        return <div>Can't find user.</div>;
    }

    const fullName = getFullName(user.firstName, user.lastName);
    const initials = getUserInitials(user.firstName, user.lastName);

    return <Card>
        <Space direction={'horizontal'} size={'middle'}>
            <Avatar>
                {initials}
            </Avatar>

            <b>{fullName}</b>
        </Space>
    </Card>
}
