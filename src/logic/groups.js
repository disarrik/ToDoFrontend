import axios from "axios";
import {baseUrl} from "./constants";

export async function getGroups() {
    const response = await axios.get(baseUrl + '/group', {
        params: {
            userLogin: localStorage.getItem("username")
        },
        withCredentials: true
    })
    return response.data
}

export async function createGroup(groupName) {
    const response = await axios.post(baseUrl + '/group', {
            adminLogin: localStorage.getItem("username"),
            name: groupName
        }, {
        withCredentials: true,
        maxRedirects: 0
    })
    return response.data
}

export async function inviteToGroup(groupId, userLogin) {
    const response = await axios.put(baseUrl + '/group', null, {
        params: {
            groupId: groupId,
            userLogin: userLogin
        },
        withCredentials: true,
        maxRedirects: 0
    })
    return response.status === 200
}