import React from 'react';
import ReactDOM from 'react-dom';
import Client from './client/client';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducer/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
        appReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );

ReactDOM.render(
        <Provider store={store}>
                <Client></Client>
        </Provider>

, document.getElementById('root'));
registerServiceWorker();
