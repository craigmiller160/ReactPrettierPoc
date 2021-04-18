import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

const Root = () => (
    <Hello
        message="Hello World"
    />
);

ReactDOM.render(<Root />, document.querySelector('#root'));