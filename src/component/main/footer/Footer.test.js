import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'

test('Footer component test', () => {
  const Render = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
