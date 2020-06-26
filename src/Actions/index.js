/*
 * action types
 */

export const CREATE_PROJECT = 'CREATE_PROJECT'

export const LOGIN = 'LOGIN'


/*
 * action creators
 */

export function createProject(project){
    return { type: CREATE_PROJECT, project}
}

export function login(user){
    return { type: LOGIN, user}
}
