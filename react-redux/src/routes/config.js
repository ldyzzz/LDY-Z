import Layout from "../pages/Layout"
import Yuedu from "../pages/Yuedu"
import Movie from "../pages/Movie"
const routes = [
    {
        path: "/layout",
        component: Layout,
        children: [
            {
                path: "/layout/yuedu",
                component: Yuedu,
            }, {
                path: "/layout/movie",
                component: Movie,
            }
        ]
    }, {
        from: "/",
        to: "/layout/yuedu"
    }
]
export default routes; 