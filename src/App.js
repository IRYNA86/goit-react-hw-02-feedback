import React from "react";
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Sections';
import Notification from 'components/Notification'

class App extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    countTotalFeedback = () => {
        // return this.state.good + this.state.neutral + this.state.bad
    return Object.values(this.state).reduce((total, item) => total + item, 0)
    };
    
    countPositiveFeedbackPercentage = () => {
        return (this.state.good / this.countTotalFeedback() * 100).toFixed(2);
    };
    onLeaveFeedback = (e) => {
		const name = e.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
    };
    render() {
		const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();
        const objKey = Object.keys(this.state);
        
		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
				</Section>

				{total === 0 ? (
					<Notification message="No feedback given" />
				) : (
					<Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
			</>
		);
	}
}

export default App;