import React from 'react'
import { render } from '@testing-library/react'
import Signup from './Signup'
import { BrowserRouter } from 'react-router-dom'

test('Signup component test', () => {
  const Render = render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
