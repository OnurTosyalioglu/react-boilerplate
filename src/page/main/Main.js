import React, { Fragment, Suspense } from 'react'
import { withStyles } from '@mui/styles'
import { BrowserRouter, Switch } from 'react-router-dom'

import styles from './styles'
import props from './props'

import Analytics from 'react-router-ga'
import analytics from '../../config/analytics'

import PrivateRoute from '../../component/main/privateRoute/PrivateRoute'
import PublicRoute from '../../component/main/publicRoute/PublicRoute'
import ProtectedRoute from '../../component/main/protectedRoute/ProtectedRoute'

import publicIndex from '../../route/public.index'
import privateIndex from '../../route/private.index'
import protectedIndex from '../../route/protected.index'

import Navbar from '../../component/main/navbar/Navbar'
import Footer from '../../component/main/footer/Footer'

const Main = props => {
  const { classes } = props

  return (
    <Fragment>
      <Analytics id={analytics.id}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            {publicIndex.map((v, i) => (
              <PublicRoute
                path={v.path}
                exact={v.exact}
                component={v.component}
                key={i}
              />
            ))}
            {protectedIndex.map((v, i) => (
              <ProtectedRoute
                path={v.path}
                exact={v.exact}
                component={v.component}
                key={i}
              />
            ))}
            {privateIndex.map((v, i) => (
              <PrivateRoute
                path={v.path}
                exact={v.exact}
                component={v.component}
                key={i}
              />
            ))}
          </Switch>
          <Footer />
        </BrowserRouter>
      </Analytics>
    </Fragment>
  )
}

Main.propTypes = props

export default withStyles(styles)(Main)
