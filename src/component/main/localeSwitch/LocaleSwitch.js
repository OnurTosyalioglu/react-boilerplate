import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { withStyles } from '@mui/styles'

import styles from './styles'
import props from './props'

import { Grid, Typography } from '@mui/material'

const LocaleSwitch = props => {
  const { t } = useTranslation()
  const { classes } = props

  useEffect(() => {})

  return <Fragment></Fragment>
}

LocaleSwitch.propTypes = props

export default withStyles(styles)(LocaleSwitch)
