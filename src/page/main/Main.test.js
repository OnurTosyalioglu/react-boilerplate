import React from 'react'
import { render } from '@testing-library/react'
import Main from './Main'
import { BrowserRouter } from 'react-router-dom'

test('Main component test', () => {
  const Render = render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
