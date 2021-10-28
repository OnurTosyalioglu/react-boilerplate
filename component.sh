mkdir -p $1
echo "import React, { 
	Fragment,
	useState,
	useEffect,
} from 'react'
import { useTranslation } from 'react-i18next'
import { withStyles } from '@mui/styles'

import styles from './styles'
import props from './props'

import {
	Grid,
	Typography,
} from '@mui/material'

const $2 = (props) => {
	const { t } = useTranslation()
	const { classes } = props

	useEffect(() => {  })

	return <Fragment>
		
	</Fragment>
}

$2.propTypes = props

export default withStyles(styles)($2)  			
" > $1/$2.js
echo "import React from 'react'
import { render } from '@testing-library/react'
import $2 from './$2'
import { BrowserRouter } from 'react-router-dom'

test('$2 component test', () => {
  const Render = render(
	  <BrowserRouter>
			<$2 />
		</BrowserRouter>
	)

	expect(true).toBe(true)
})
" > $1/$2.test.js
echo "
import propTypes from 'prop-types'

export default {

}
" > $1/props.js
echo "const styles = theme => ({

})

export default styles
" > $1/styles.js
