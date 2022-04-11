import React from "react";
import PropTypes from 'prop-types';
import css from 'components/Statistics.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
        <>
            {options.map(option => (
                <button className={css.button} key={option} type="button" name={option} onClick={onLeaveFeedback}>
					{option}
				</button>
			))}
		</>
	);
};

FeedbackOptions.propTypes = {
	options: PropTypes.array,
	onLeaveFeedback: PropTypes.func
};

export default FeedbackOptions;