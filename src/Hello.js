import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Hello = (props) => {
	useEffect(() => {
		const object = { abc: 'def' };
		console.log(object);
		const array = ['one', 'two'];
		console.log(array);
	}, []);

	return (
		<div>
			<h1>{props.message}</h1>
			<button id="foo">ABC</button>
		</div>
	);
};
Hello.propTypes = {
	message: PropTypes.string.isRequired
};

export default Hello;
