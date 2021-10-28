import { lazy } from 'react'
import WithSuspense from '../component/main/withSuspense/WithSuspense'

const Home = lazy(() => import('../page/index/home/Home'))

export default [
  {
    exact: true,
    path: '/',
		component: WithSuspense(Home),
  },
]
