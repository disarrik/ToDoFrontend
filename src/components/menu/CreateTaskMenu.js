import {createTask} from "../../logic/tasks";
import {getGroups} from "../../logic/groups";
import {useEffect, useState} from "react";

export default function CreateTaskMenu(props) {
    const [state, setState] = useState({groups: []})
    useEffect(() => {
        getGroups()
            .then(groups => setState({groups: groups}))
    }, [])
    const onSubmit = (event) => {
        event.preventDefault()
        createTask(
            event.target.name.value,
            event.target.description.value,
            event.target.deadline.value,
            event.target.groupId.value,
        ).then(() => props.refreshTasksCallback())
    }
    const groupsOptions = state.groups.map(
        group => <option value={group.id} key={group.id}>{group.name}</option>
    )

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="name"/>
                <textarea placeholder="Description" name="description"/>
                <input type="datetime-local" name="deadline"/>
                <select name="groupId">
                    {groupsOptions}
                </select>
                <input type="submit"/>
            </form>
        </div>
    )
}