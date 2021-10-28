import React from 'react'
import { render } from '@testing-library/react'
import Login from './Login'
import { BrowserRouter } from 'react-router-dom'

test('Login component test', () => {
  const Render = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
