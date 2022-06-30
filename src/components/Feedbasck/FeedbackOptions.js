import React, { Component } from 'react'
import s from './FeedbackOptions.module.css'

class FeedbackOptions extends Component {
    render() {
        return (
            <>
                <button
                    className={s.button}
                    type="button"
                    onClick={() => this.props.onFeedback('good')}
                >
                    Good
                </button>
                <button
                    className={s.button}
                    type="button"
                    onClick={() => this.props.onFeedback('neutral')}
                >
                    Neutral
                </button>
                <button
                    className={s.button}
                    type="button"
                    onClick={() => this.props.onFeedback('bad')}
                >
                    Bad
                </button>
            </>
        )
    }
}

export default FeedbackOptions
