import React from 'react'

export default function Dashboard(props) {
    return (
        <section className="DashboardComponent">
            <button onClick={() => {props.handleBall(props.strikeCount, props.ballCount)}}>Ball</button>
            <button onClick={() => {props.handleStrike(props.strikeCount, props.ballCount)}}>Strike</button>
            <button onClick={() => {props.handleFoul(props.strikeCount, props.ballCount)}}>Foul</button>
            <button onClick={() => {props.handleHit(props.strikeCount, props.ballCount)}}>Hit</button>
        </section>
    )
}