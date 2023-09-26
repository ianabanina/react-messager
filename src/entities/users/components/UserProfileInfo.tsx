import {Avatar, Card, Space} from "antd";
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

    return <Card>
        <Space direction={'horizontal'} size={'middle'}>
            <Avatar>
                {user.initials}
            </Avatar>

            <b>{user.fullName}</b>
        </Space>
    </Card>
}
