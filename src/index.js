import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { store } from './redux/redux-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

export let renderTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </Router>
        </Provider>,
        document.getElementById('root')
    );
};
renderTree(store.getState());
