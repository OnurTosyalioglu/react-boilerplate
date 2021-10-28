import { lazy } from 'react'
import WithSuspense from '../component/main/withSuspense/WithSuspense'

const Login = lazy(() => import('../page/auth/login/Login'))
const Signup = lazy(() =>
  import('../page/auth/signup/Signup')
)

export default [
  {
    exact: false,
    path: '/login',
    component: WithSuspense(Login),
  },
  {
    exact: false,
    path: '/signup',
    component: WithSuspense(Signup),
  },
]
