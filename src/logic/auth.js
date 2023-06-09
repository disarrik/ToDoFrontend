import axios from "axios";
import {baseUrl} from "./constants";

export async function register(username, password) {
    const response = await axios.post(baseUrl + '/register', {
        username: username,
        password: password
    }, {withCredentials: true})
    return response.status === 200
}

export async function login(username, password) {
    const response = await axios.post(baseUrl + '/login', null, {
        params:
            {
                username: username,
                password: password
            }
    },
        {
            withCredentials: true,
            maxRedirects: 0
        }
    )
    return response.status === 200
}