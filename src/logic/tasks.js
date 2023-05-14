import axios from "axios";

const baseUrl = 'http://localhost:8080'

export async function getAllTasks() {
    const response = await axios.get(baseUrl + '/task', {
        params: {
            userLogin: localStorage.getItem("username")
        }
    })
    return response.data
}

export async function markDone(taskId, done) {
    const response = await axios.patch(baseUrl + '/task', null,{
        params: {
            userLogin: localStorage.getItem("username"),
            taskId: taskId,
            done: done
        }
    })
    return response.data
}

export async function createTask(name, description, deadline, groupId) {
    const response = await axios.post(baseUrl + '/task', {
        name: name,
        description: description,
        deadline: deadline,
        groupId: groupId
    })
    return response.status === 200
}