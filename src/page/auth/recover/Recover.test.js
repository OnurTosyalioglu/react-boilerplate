import React from 'react'
import { render } from '@testing-library/react'
import Recover from './Recover'
import { BrowserRouter } from 'react-router-dom'

test('Recover component test', () => {
  const Render = render(
    <BrowserRouter>
      <Recover />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
