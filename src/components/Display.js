import React from 'react'

export default function Display(props) {
    return (
        <section className="displayComponent">
            <div className="ballCount">Ball: {props.ballCount}</div>
            <div className="strikeCount">Strike: {props.strikeCount}</div>
        </section>
    )
}