import React from 'react'
import {register} from '../../../logic/auth'
import {useNavigate} from "react-router-dom";

export default function RegisterMenu() {
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        const success = register(event.target.username.value, event.target.password.value)
        if (success) {
            navigate('/login')
        }
    }
    return(
        <form onSubmit={onSubmit}>
            <h1>Register</h1>
            <input type='text' id='username' name='username'/>
            <input type='password' id='password' name='password'/>
            <input type='submit'/>
        </form>
    )
}