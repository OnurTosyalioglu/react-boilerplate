import React from 'react'
import { render } from '@testing-library/react'
import LocaleSwitch from './LocaleSwitch'
import { BrowserRouter } from 'react-router-dom'

test('LocaleSwitch component test', () => {
  const Render = render(
    <BrowserRouter>
      <LocaleSwitch />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
