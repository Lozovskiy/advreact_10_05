import {appName} from '../config'
import {Record, List} from 'immutable'
import firebase from 'firebase'
import { createSelector } from 'reselect'

/**
 * Constants
 * */
export const moduleName = 'admin'
const prefix = `${appName}/${moduleName}`

export const ADD_PERSON_SUCCESS = `${prefix}/ADD_PERSON_SUCCESS`

/**
 * Reducer
 * */
export const ReducerRecord = Record({
    persons: List()
})

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action

    switch (type) {
        case ADD_PERSON_SUCCESS:
            return state.updateIn([ 'persons' ], persons => persons.push(payload))

        default:
            return state
    }
}

/**
 * Selectors
 * */

/**
 * Action Creators
 * */

export function addPerson(personData) {

    return (dispatch) => Promise.resolve().then(dispatch({type: ADD_PERSON_SUCCESS, payload: personData}))
}
