import React from 'react'
import * as rtl from '@testing-library/react'
import { render } from '@testing-library/react'

import App, { handleBall, handleStrike, handleFoul, handleHit } from './App'

test('App renders without crashing', () => {
  rtl.render(<App />)
})

test('handleBall adds 1 to ball, resets both if strike is 2 or ball is 3', () => {
  expect(handleBall(0, 0)).toBe(0, 1)
  expect(handleBall(2, 0)).toBe(0, 0)
  expect(handleBall(0, 1)).toBe(0, 2)
})

test('handleStrike adds 1 to strike, resets both if strike is 2 or ball is 3', () => {
  expect(handleStrike(0, 0)).toBe(1, 0)
  expect(handleStrike(2, 0)).toBe(0, 0)
  expect(handleStrike(0, 1)).toBe(1, 1)
})

test('handleFoul adds 1 to strike, unless at 2 in which case nothing', () => {
  expect(handleFoul(0, 0)).toBe(1, 0)
  expect(handleFoul(2, 0)).toBe(2, 0)
  expect(handleFoul(0, 1)).toBe(1, 1)
})

test('handleHit resets strike and ball to 0', () => {
  expect(handleHit(1, 3)).toBe(0, 0)
  expect(handleHit(2, 2)).toBe(0, 0)
  expect(handleHit(3, 1)).toBe(0, 0)
})

test('App contains strike and ball counters', () => {
  const { getByText } = render(<App />)
  getByText("Strike")
  getByText("Ball")
})