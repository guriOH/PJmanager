import {CREATE_PROJECT} from '../Actions'

import {combineReducers} from 'redux';

const initialState = {
    projects:[]
}

function projectReducer(state=initialState, action) {
    switch(action.type){
        case CREATE_PROJECT:
            return Object.assign({}, state, {
                projects:[
                  ...state.projects,
                  {
                      project: action.project
                  }  
                ]
            })
        default:
            return state
    }
}


export default combineReducers({
    projects: projectReducer
})


