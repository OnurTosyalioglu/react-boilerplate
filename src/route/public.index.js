import { lazy } from 'react'

const Home = lazy(() => import('../page/index/home/Home'))

export default [
  {
    exact: true,
    path: '/',
    component: Home,
  },
]
