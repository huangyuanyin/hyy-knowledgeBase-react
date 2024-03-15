import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

import Home from '../views/home'
import Layout from '../views/Layout'
import Login from '../views/login'

export const router_item: Array<object> = [
  {
    path: '/',
    label: '首页',
    key: '/',
    hidden: true,
    element: <Navigate to="/layout" />
  },
  {
    path: '/login',
    label: '登录',
    key: 'login',
    element: <Login />
  },
  {
    path: '/layout',
    label: '控制台',
    key: 'layout',
    element: <Layout />,
    children: [{ path: 'home', label: '首页', key: 'home', element: <Home /> }]
  }
]

const GetRoutes = () => {
  const routes: RouteObject[] = useRoutes(router_item)
  return routes
}

export default GetRoutes
