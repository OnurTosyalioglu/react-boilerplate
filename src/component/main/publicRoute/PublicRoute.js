import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { withStyles } from '@mui/styles'
import { Route } from 'react-router-dom'

import styles from './styles'
import props from './props'

import { Grid, Typography } from '@mui/material'

const PublicRoute = ({ component: Component, ...rest }) => {
  const { t } = useTranslation()
  const { classes } = rest

  useEffect(() => {})

  return (
    <Fragment>
      <Route
        {...props}
        render={props => <Component {...props} />}
      />
    </Fragment>
  )
}

PublicRoute.propTypes = props

export default withStyles(styles)(PublicRoute)
