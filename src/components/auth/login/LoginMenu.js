import React from 'react'
import {login} from '../../../logic/auth'
import {Link, useNavigate} from "react-router-dom";


export default function LoginMenu() {
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        login(event.target.username.value, event.target.password.value)
            .then(
                r => {
                    if (r) {
                        console.log(1)
                        localStorage.setItem("username", event.target.username.value)
                        navigate("/")
                    }
                }
            )
            .catch(
                e => {
                    console.log(2)
                    navigate("/login")
                }
            )
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input type='text' id='username' name='username'/>
                <input type='password' id='password' name='password'/>
                <input type='submit'/>
            </form>
            <Link to='/register'>Register</Link>
        </div>
    )
}