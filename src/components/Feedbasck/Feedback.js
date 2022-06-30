import React, { Component } from 'react'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Section from './Section'

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    isFeedbackExist = false

    onFeedback = (rating) => {
        this.isFeedbackExist = true
        this.setState((state) => ({
            ...state,
            [rating]: state[rating] + 1,
        }))
    }

    render() {
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions onFeedback={this.onFeedback} />
                </Section>
                {this.isFeedbackExist && (
                    <Section title="Statistic">
                        <Statistics {...this.state} />
                    </Section>
                )}
            </>
        )
    }
}

export default Feedback
