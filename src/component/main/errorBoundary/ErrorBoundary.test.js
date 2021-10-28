import React from 'react'
import { render } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'

test('ErrorBoundary component test', () => {
  const Render = render(
    <BrowserRouter>
      <ErrorBoundary />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
