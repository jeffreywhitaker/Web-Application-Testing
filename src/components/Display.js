import React from 'react'

export default function Display(props) {
    return (
        <section className="displayComponent">
            <div className="ballCount" data-testid="ballCount">Ball: {props.ballCount}</div>
            <div className="strikeCount" data-testid="strikeCount">Strike: {props.strikeCount}</div>
        </section>
    )
}