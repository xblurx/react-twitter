import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { store } from "./redux/redux-store";

export let renderTree = () => {
    ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
};

renderTree(store.getState());

store.subscribe(() => {
    renderTree(store.getState());
});
