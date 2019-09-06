import React from 'react'

export default function Dashboard(props) {
    return (
        <section className="DashboardComponent">
            <button onClick={() => {props.handleBall(props.strikeCount, props.ballCount)}} data-testid="ballButton">Ball</button>
            <button onClick={() => {props.handleStrike(props.strikeCount, props.ballCount)}} data-testid="strikeButton">Strike</button>
            <button onClick={() => {props.handleFoul(props.strikeCount, props.ballCount)}} data-testid="foulButton">Foul</button>
            <button onClick={() => {props.handleHit(props.strikeCount, props.ballCount)}} data-testid="hitButton">Hit</button>
        </section>
    )
}