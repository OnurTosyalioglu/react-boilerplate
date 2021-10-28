import React, { Fragment } from 'react'

import { Provider } from 'react-redux'
import store from './redux/store/index'

import { I18nextProvider } from 'react-i18next'
import i18n from './locale/i18n'

import { ThemeProvider } from '@mui/material'
import theme from './style/theme'

import Main from './page/main/Main'

const App = props => {
  return (
    <Fragment>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <Main />
          </ThemeProvider>
        </I18nextProvider>
      </Provider>
    </Fragment>
  )
}

export default App
