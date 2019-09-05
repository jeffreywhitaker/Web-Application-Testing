import React, { useState } from 'react'
import './App.css'

function App() {
  const [ballCount, setBallCount] = useState(0)
  const [strikeCount, setStrikeCount] = useState(0)

  const handleBall = () => {
    if (strikeCount === 2 || ballCount === 3) {
      setBallCount(0)
      setStrikeCount(0)
    } else {
      setBallCount(ballCount + 1)
    }
  }

  const handleStrike = () => {
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


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="ballCount">Ball: {ballCount}</div>
        <div className="strikeCount">Strike: {strikeCount}</div>
      </section>
      <section className="buttons">
        <button onClick={handleBall}>Ball</button>
        <button onClick={handleStrike}>Strike</button>
        <button onClick={handleFoul}>Foul</button>
        <button onClick={handleHit}>Hit</button>
      </section>
    </div>
  );
}

export default App;
