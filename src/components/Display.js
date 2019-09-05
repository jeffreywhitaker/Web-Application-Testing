import React from 'react'

export default function Display() {
    return (
        <section className="scoreboard">
            <div className="ballCount">Ball: {ballCount}</div>
            <div className="strikeCount">Strike: {strikeCount}</div>
        </section>
    )
}