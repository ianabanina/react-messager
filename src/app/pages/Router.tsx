import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Chat} from "entities/messages/components/Chat.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Chat/>,
    },
]);

export function Router() {
    return (
        <RouterProvider router={router}/>
    )
}
