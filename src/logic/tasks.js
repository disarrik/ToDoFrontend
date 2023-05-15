import axios from "axios";
import {baseUrl} from "./constants";

export async function getAllTasks() {
    const response = await axios.get(baseUrl + '/task', {
        params: {
            userLogin: localStorage.getItem("username")
        },
        withCredentials: true
    })
    return response.data
}

export async function markDone(taskId, done) {
    const response = await axios.patch(baseUrl + '/task', null,{
        params: {
            userLogin: localStorage.getItem("username"),
            taskId: taskId,
            done: done
        },
        withCredentials: true
    })
    return response.data
}

export async function createTask(name, description, deadline, groupId) {
    const response = await axios.post(baseUrl + '/task', {
        name: name,
        description: description,
        deadline: deadline,
        groupId: groupId
    }, {withCredentials: true})
    return response.status === 200
}