import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import state, { updateTree } from './redux/state';

export let renderTree = () => {
    ReactDOM.render(<App state={state} />, document.getElementById('root'));
};

renderTree(state);

updateTree(renderTree);
