import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Chat} from "entities/messages/components/Chat.tsx";
import {UserPage} from "entities/users/components/UserPage.tsx";
import {ERoutes} from "common/const/Router.const.ts";

const router = createBrowserRouter([
    {
        path: ERoutes.Root,
        element: <Chat/>,
    },
    {
        path: ERoutes.User,
        element: <UserPage/>,
    },
]);

export function Router() {
    return (
        <RouterProvider router={router}/>
    )
}
