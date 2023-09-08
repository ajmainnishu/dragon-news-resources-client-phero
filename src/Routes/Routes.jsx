import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Categories from "../Components/Categories/Categories";
import CategoryNews from "../Components/CategoryNews/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
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
    }
])

export default router;