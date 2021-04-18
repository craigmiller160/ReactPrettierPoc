import React from 'react';
import PropTypes from 'prop-types';

const Hello = (props) => (
	<div>
		<h1>{props.message}</h1>
	</div>
);
Hello.propTypes = {
	message: PropTypes.string.isRequired
};

export default Hello;
