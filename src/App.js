import React, { useState } from 'react'
import './App.css'

import Display from './components/Display'
import Dashboard from './components/Dashboard'

export default function App() {
  // state logic
  const [ballCount, setBallCount] = useState(0)
  const [strikeCount, setStrikeCount] = useState(0)

  // handlers
  const handleBall = (strikeCount, ballCount) => {
    if (strikeCount === 2 || ballCount === 3) {
      setBallCount(0)
      setStrikeCount(0)
    } else {
      setBallCount(ballCount + 1)
    }
  }
  
  const handleStrike = (strikeCount, ballCount) => {
    if (strikeCount === 2 || ballCount === 3) {
      setBallCount(0)
      setStrikeCount(0)
    } else {
      setStrikeCount(strikeCount + 1)
    }
  }
  
  const handleFoul = () => {
    if (strikeCount === 0) {
      setStrikeCount(1)
    } else if (strikeCount === 1) {
      setStrikeCount(2)
    } else if (strikeCount === 2) {
      setStrikeCount(strikeCount)
    }
  }
  
  const handleHit = () => {
    setBallCount(0)
    setStrikeCount(0)
  }

  // return statement
  return (
    <div className="container">
      <Display ballCount={ballCount} strikeCount={strikeCount} />
      <Dashboard handleBall={handleBall} handleStrike={handleStrike} handleFoul={handleFoul} handleHit={handleHit} strikeCount={strikeCount} ballCount={ballCount}/>
    </div>
  )
}
