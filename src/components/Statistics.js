import React from "react";


class Statistics extends React.Component{

    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0
    }

    // static propTypes = {} прописать проптайпы


    state = {
        good: this.props.initialGood,
  neutral: this.props.initialNeutral,
  bad: this.props.initialBad
    }
    countTotalFeedback = () => {
        // return this.state.good + this.state.neutral + this.state.bad
    return Object.values(this.state).reduce((total, item) => total + item, 0)
    };
    
    countPositiveFeedbackPercentage = () => {
        return (this.state.good / this.countTotalFeedback() * 100).toFixed(2);
    };
    
    handleGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        })
    };
handleNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        })
    };
handleBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        })
    };
    render() {
        const total = this.countTotalFeedback();
        const positiveFeedBack = this.countPositiveFeedbackPercentage();
        return (
           <div>
        <h2>Please leave feedback</h2>

        <div>
                    <button type="button" onClick= {
                        this.handleGood
                    }>Good </button>
            <button type="button" onClick={this.handleNeutral}>Neutral</button>
            <button type="button" onClick={this.handleBad}>Bad</button>
        </div>

                <h2>Statistics</h2>
                
        <p>Good: {this.state.good}</p>
                <p>Neutral: { this.state.neutral}</p>
                <p>Bad: { this.state.bad}</p>
        <p>Total: {total} </p>
        <p>Positive feedback: {positiveFeedBack} %</p>
    </div> 
        )
    }
}

export default Statistics;