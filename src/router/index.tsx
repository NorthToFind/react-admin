import { createBrowserRouter, RouteObject,Navigate } from 'react-router-dom';
import asyncRouter from "./syncRoute/index";
export type RouteType = {
    /** 是否隐藏菜单布局 */
    hideLayout?: boolean
    /** 在菜单栏是否显示 */
    hideInMenu?: boolean
    /** 权限控制 true 则都控制 */
    permissionObj?: {
      /** 是否进行页面权限控制，控制取后端数据 */
      isPagePermission?: boolean
      /** 判断token是否存在控制 */
      isToken?: boolean
    } & true
    children?: RouteType[]
  } & RouteObject


const relRouters:RouteType[] = [
    {
    path: '/',
    /** 重定向 */
    element: <Navigate replace to="/login" />
    },
    ...asyncRouter
]
console.log(relRouters)
export const router = createBrowserRouter(relRouters)
