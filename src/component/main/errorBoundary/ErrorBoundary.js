import React, {
  Fragment,
  useState,
  useEffect,
  Component,
} from 'react'
import {
  useTranslation,
  withTranslation,
} from 'react-i18next'
import { withStyles } from '@mui/styles'

import styles from './styles'
import props from './props'

import { Grid, Typography } from '@mui/material'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true,
    }
  }

  render() {
    const { classes } = this.props
    const { t } = this.props

    return (
      <Fragment>
        {this.state.hasError ? (
          <Grid
            container
            className={classes.container}
          ></Grid>
        ) : (
          this.props.children
        )}
      </Fragment>
    )
  }
}

ErrorBoundary.propTypes = props

export default withTranslation()(
  withStyles(styles)(ErrorBoundary)
)
