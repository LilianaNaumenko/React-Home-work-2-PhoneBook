import React, { Component } from 'react'
import s from './Statistics.module.css'

export class Statistics extends Component {
    countTotalFeedback() {
        return this.props.good + this.props.neutral + this.props.bad
    }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback()
        return Math.floor((100 / total) * this.props.good)
    }
    render() {
        const { good, neutral, bad } = this.props
        return (
            <>
                <p className={s.textGood}>Good - {good}</p>
                <p className={s.textNeutral}>Neutral - {neutral}</p>
                <p className={s.textBad}>Bad - {bad}</p>
                <p>Total - {this.countTotalFeedback()}</p>
                <p>
                    Positive feedback {''} - {''}
                    {this.countPositiveFeedbackPercentage()} %
                </p>
            </>
        )
    }
}

export default Statistics
