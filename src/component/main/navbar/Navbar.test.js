import React from 'react'
import { render } from '@testing-library/react'
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'

test('Navbar component test', () => {
  const Render = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
