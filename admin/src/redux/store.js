import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'
import { isImmutable } from 'immutable'
import reducer from './reducer'
import history from '../history'

const stateTransformer = (state) => {
    let newState = {};

    for (var i of Object.keys(state)) {
        if (isImmutable(state[i])) {
            newState[i] = state[i].toJS();
        } else {
            newState[i] = state[i];
        }
    };

    return newState;
};


const logger = createLogger({
    collapsed: true,
    stateTransformer
});

const enhancer = applyMiddleware(thunk, routerMiddleware(history), logger)

const store = createStore(reducer, enhancer)

window.store = store

export default store