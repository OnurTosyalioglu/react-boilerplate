import React from 'react'
import { render } from '@testing-library/react'
import Confirmation from './Confirmation'
import { BrowserRouter } from 'react-router-dom'

test('Confirmation component test', () => {
  const Render = render(
    <BrowserRouter>
      <Confirmation />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
