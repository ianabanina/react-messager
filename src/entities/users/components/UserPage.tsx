import {UserProfileInfo} from "entities/users/components/UserProfileInfo.tsx";
import {UsersMessagesList} from "entities/messages/components/UsersMessagesList.tsx";
import {Navigate, useParams} from "react-router-dom";
import {ERoutes} from "common/const/Router.const.ts";
import {Space} from "antd";

export function UserPage() {
    const {userId} = useParams<{ userId: string }>();

    if (!userId) {
        // Should log the error somewhere else, Sentry for example
        console.error('Empty user id on user page');
        return <Navigate to={ERoutes.Root}/>
    }

    return <Space direction={'vertical'} size={'middle'} className={'d-flex'}>
        <UserProfileInfo id={userId}/>

        <UsersMessagesList userId={userId}/>
    </Space>
}
