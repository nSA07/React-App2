import { Boards } from "@/pages/Boards";
import { Layout } from "@/pages/Layout";
import { ListOfBoards } from "@/pages/ListOfBoards";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ListOfBoards />
            },
            {
                path: "board/:id",
                element: <Boards />
            }
        ]
    }
])