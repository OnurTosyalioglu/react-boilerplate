import React from 'react'
import { render } from '@testing-library/react'
import PublicRoute from './PublicRoute'
import { BrowserRouter } from 'react-router-dom'

test('PublicRoute component test', () => {
  const Render = render(
    <BrowserRouter>
      <PublicRoute />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
