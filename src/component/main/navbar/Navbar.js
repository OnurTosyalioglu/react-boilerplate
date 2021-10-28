import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { withStyles } from '@mui/styles'

import styles from './styles'
import props from './props'

import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
} from '@mui/material'

const Navbar = props => {
  const { t } = useTranslation()
  const { classes } = props

  useEffect(() => {})

  return (
    <Fragment>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            className={classes.container}
          ></Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.content} />
    </Fragment>
  )
}

Navbar.propTypes = props

export default withStyles(styles)(Navbar)
