import axios from 'axios';

export function getProject(projectId) {
    return axios.get('http://localhost:8080/project/'+projectId);
}


export function getProjectList() {
    return axios.get('http://localhost:8080/project/');
}

export function createProject(payload) {
    return axios.post('http://localhost:8080/project/',payload);
}