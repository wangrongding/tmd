import { lazy, Suspense } from 'react'
import { DesktopOutlined, SettingOutlined, VideoCameraOutlined } from '@ant-design/icons'
import Container from '@/layout'
import { Navigate } from 'react-router-dom'

// 路由懒加载
const Home = lazy(() => import('@/pages/Home'))
const Setting = lazy(() => import('@/pages/Setting'))
const Page404 = lazy(() => import('@/pages/ErrorPage/Page404'))
const Page401 = lazy(() => import('@/pages/ErrorPage/Page401'))

// 路由懒加载的loading
const withSuspense = (Component: JSX.Element) => <Suspense fallback={<div>loading...</div>}>{Component}</Suspense>

// 菜单路由
export const menuRoutes = [
  {
    path: '/home',
    title: '壁纸列表',
    icon: <DesktopOutlined />,
    element: withSuspense(<Home />),
  },
  {
    path: '/setting',
    title: '设置',
    icon: <SettingOutlined />,
    element: withSuspense(<Setting />),
  },
]

// 路由配置
export const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />,
  },
  {
    path: '/',
    element: <Container />,
    children: menuRoutes,
  },
  {
    path: '/401',
    element: <Page401 />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]
