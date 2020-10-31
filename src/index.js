import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import store from "./redux/state";

export let renderTree = () => {
    ReactDOM.render(<App state={store.getState()} functions={store.getFunctions()} />, document.getElementById('root'));
};

renderTree(store.getState());

store.subscriber(renderTree);
