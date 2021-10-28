import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'

test('Home component test', () => {
  const Render = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
