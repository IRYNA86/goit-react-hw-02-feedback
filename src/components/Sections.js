import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Statistics.module.css'

const Section = ({ title,children }) => {
	
	return (
		<>
			<h2 className={css.titleFirst}>{title}</h2>
			{children}
		</>
	);
};

Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.element
};
export default Section;