import React from 'react'
import { render } from '@testing-library/react'
import Reset from './Reset'
import { BrowserRouter } from 'react-router-dom'

test('Reset component test', () => {
  const Render = render(
    <BrowserRouter>
      <Reset />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
