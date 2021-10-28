import React from 'react'
import { render } from '@testing-library/react'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter } from 'react-router-dom'

test('PrivateRoute component test', () => {
  const Render = render(
    <BrowserRouter>
      <PrivateRoute />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
