/*
 * action types
 */

export const CREATE_PROJECT = 'CREATE_PROJECT'


/*
 * action creators
 */

export function createProject(project){
    return { type: CREATE_PROJECT, project}
}

