import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Categories from "../Components/Categories/Categories";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'categories',
                element: <Categories />
            }
        ]
    }
])

export default router;