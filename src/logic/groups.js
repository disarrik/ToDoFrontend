import axios from "axios";

const baseUrl = 'http://localhost:8080'

export async function getGroups() {
    const response = await axios.get(baseUrl + '/group', {
        params: {
            userLogin: localStorage.getItem("username")
        }
    })
    return response.data
}