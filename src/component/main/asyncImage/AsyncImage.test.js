import React from 'react'
import { render } from '@testing-library/react'
import AsyncImage from './AsyncImage'
import { BrowserRouter } from 'react-router-dom'

test('AsyncImage component test', () => {
  const Render = render(
    <BrowserRouter>
      <AsyncImage />
    </BrowserRouter>
  )

  expect(true).toBe(true)
})
