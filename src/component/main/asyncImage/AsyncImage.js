import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { withStyles } from '@mui/styles'

import styles from './styles'
import props from './props'

import Skeleton from 'react-loading-skeleton'

const AsyncImage = props => {
  const { t } = useTranslation()
  const { classes } = props
  const [status, setStatus] = useState(false)

  useEffect(() => {})

  const onLoad = e => setStatus(true)

  return (
    <Fragment>
      {status ? (
        <img
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      ) : (
        <Fragment>
          <img
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            onLoad={onLoad}
          />
          <Skeleton
            width={props.width}
            height={props.height}
          />
        </Fragment>
      )}
    </Fragment>
  )
}

AsyncImage.propTypes = props

export default withStyles(styles)(AsyncImage)
