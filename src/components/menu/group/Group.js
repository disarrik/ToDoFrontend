import {useState} from "react";
import {inviteToGroup} from "../../../logic/groups";
import './Group.css'

export default function Group(props) {
    const [showInviteForm, setInviteForm] = useState(false)
    const inviteUser = (event) => {
        event.preventDefault()
        inviteToGroup(props.id, event.target.username.value)
    }
    const inviteFormOrEmpty =  showInviteForm ?
            <form onSubmit={inviteUser}>
                <input type="text" name="username"/>
                <input type="submit" value="Invite"/>
            </form>
            : null

    return(
        <div className="group">
            <h2 onClick={() => setInviteForm(!showInviteForm)}>{props.name}</h2>
            {inviteFormOrEmpty}
        </div>
    )
}