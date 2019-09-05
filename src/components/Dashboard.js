import React from 'react'

export default function Dashboard() {
    return (
        <section className="buttons">
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleStrike}>Strike</button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={handleHit}>Hit</button>
        </section>
    )
}