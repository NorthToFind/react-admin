// import { Navigate } from 'react-router-dom';
import Login from "@/views/login";
import NotFound from "@/views/sys/404";
import { RouteType } from "../index"
 const asyncRouter = [
    {
        path: '/login',
        name: '登录',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    },
] as RouteType[]
export default asyncRouter