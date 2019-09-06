import React from 'react'
import * as rtl from '@testing-library/react'
import { render, fireEvent } from '@testing-library/react'

import App from './App'

test('App renders without crashing', () => {
  const { getByText } = render(<App />)
  getByText("Strike")
  getByText("Ball")
})

test('handleBall adds 1 to ball and sets ball count to 0 if ball count is 3', () => {
  const { getByTestId } = rtl.render(<App />)
  const ballButton = getByTestId('ballButton');
  const ballCount = getByTestId('ballCount');
  expect(ballCount.textContent).toBe('Ball: 0')
  fireEvent.click(ballButton)
  expect(ballCount.textContent).toBe('Ball: 1')
  fireEvent.click(ballButton)
  expect(ballCount.textContent).toBe('Ball: 2')
  fireEvent.click(ballButton)
  expect(ballCount.textContent).toBe('Ball: 3')
  fireEvent.click(ballButton)
  expect(ballCount.textContent).toBe('Ball: 0')
})

test('handleBall sets strike count and ball count to 0 if strike count is 2', () => {
  const { getByTestId } = rtl.render(<App />)
  const ballButton = getByTestId('ballButton');
  const ballCount = getByTestId('ballCount');
  const strikeButton = getByTestId('strikeButton');
  const strikeCount = getByTestId('strikeCount');
  fireEvent.click(ballButton)
  expect(ballCount.textContent).toBe('Ball: 1')
  expect(strikeCount.textContent).toBe('Strike: 0')
  fireEvent.click(strikeButton)
  expect(strikeCount.textContent).toBe('Strike: 1')
  fireEvent.click(strikeButton)
  expect(strikeCount.textContent).toBe('Strike: 2')
  fireEvent.click(ballButton)
  expect(strikeCount.textContent).toBe('Strike: 0')
  expect(ballCount.textContent).toBe('Ball: 0')
})
