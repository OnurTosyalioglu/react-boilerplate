import React from 'react'
import { render } from '@testing-library/react'
import Fallback from './Fallback'
import { BrowserRouter } from 'react-router-dom'

test('Fallback component test', () => {
  const Render = render(
    <BrowserRouter>
      <Fallback />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
