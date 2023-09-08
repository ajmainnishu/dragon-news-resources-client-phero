import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Categories from "../Components/Categories/Categories";
import CategoryNews from "../Components/CategoryNews/CategoryNews";
import News from "../layout/News";
import SingleNews from "../Components/SingleNews/SingleNews";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <CategoryNews />,
                loader: () => fetch(`http://localhost:5000/category/0`)
            },
            {
                path: 'categories',
                element: <Categories />
            },
            {
                path: 'category/:id',
                element: <CategoryNews />,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <News />,
        children: [
            {
                path:  ':id',
                element: <SingleNews />,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default router;