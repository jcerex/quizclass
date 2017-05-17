import React from 'react';
// The CSS file only works with its js counterpart
import './ProgressBar.css';
import PropTypes from 'prop-types';

// stateless component

const ProgressBar = ({ current_step, question_length }) => {
	return (
		<p>{current_step}/{question_length}</p>
	)
}

ProgressBar.propTypes = {
	current_step: PropTypes.number.isRequired,
	question_length: PropTypes.number.isRequired,
}

export default ProgressBar;
