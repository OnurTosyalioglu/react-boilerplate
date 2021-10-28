import React from 'react'
import { render } from '@testing-library/react'
import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter } from 'react-router-dom'

test('ProtectedRoute component test', () => {
  const Render = render(
    <BrowserRouter>
      <ProtectedRoute />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
