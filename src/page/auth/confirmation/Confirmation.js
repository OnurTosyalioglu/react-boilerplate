import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { withStyles } from '@mui/styles'

import styles from './styles'
import props from './props'

import { Grid, Typography } from '@mui/material'

const Confirmation = props => {
  const { t } = useTranslation()
  const { classes } = props

  useEffect(() => {})

  return <Fragment></Fragment>
}

Confirmation.propTypes = props

export default withStyles(styles)(Confirmation)
