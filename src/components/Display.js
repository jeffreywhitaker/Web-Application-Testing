import React from 'react'

export default function Display(props) {
    return (
        <section className="scoreboard">
            <div className="ballCount">Ball: {props.ballCount}</div>
            <div className="strikeCount">Strike: {props.strikeCount}</div>
        </section>
    )
}