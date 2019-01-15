import React from 'react';
import ReactDOM from 'react-dom';

function Root() {
    return (<h1>Hello</h1>);
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root />, document.getElementById('root'));
});