import {createGroup, getGroups} from "../../../logic/groups";
import './CreateGroup.css'

export default function CreateGroupMenu(props) {
    const onSubmit = (event) => {
        event.preventDefault()
        createGroup(event.target.name.value).then(
            () => props.refreshGroupsCallback()
        )
    }


    return(
        <div className="createGroup">
            <h2>Create group</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="name"/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}