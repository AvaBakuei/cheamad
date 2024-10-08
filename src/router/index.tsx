import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/likes",
                element: <div>Likes</div>,
            },
            {
                path: "/tickets",
                element: <div>Tickets</div>,
            },
            {
                path: "/login",
                element: <div>Login</div>,
            },
        ],
    },
]);

export default router;
