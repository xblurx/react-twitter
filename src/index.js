import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import state from './redux/state';

export let renderTree = () => {
    ReactDOM.render(<App state={state} />, document.getElementById('root'));
};

renderTree(state);

state.subscriber(renderTree);
