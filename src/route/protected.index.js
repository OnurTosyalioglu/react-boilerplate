import { lazy } from 'react'

const Login = lazy(() => import('../page/auth/login/Login'))
const Signup = lazy(() =>
  import('../page/auth/signup/Signup')
)

export default [
  {
    exact: false,
    path: '/login',
    component: Login,
  },
  {
    exact: false,
    path: '/signup',
    component: Signup,
  },
]
