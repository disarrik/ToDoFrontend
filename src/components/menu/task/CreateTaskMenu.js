import {createTask} from "../../../logic/tasks";
import './CreateTaskMenu.css'

export default function CreateTaskMenu(props) {
    const onSubmit = (event) => {
        event.preventDefault()
        createTask(
            event.target.name.value,
            event.target.description.value,
            event.target.deadline.value,
            event.target.groupId.value,
        ).then(() => props.refreshTasksCallback())
    }

    return(
        <div className='createTaskMenu'>
            <h1 className="createTaskHeader">Create task</h1>
            <form onSubmit={onSubmit} className="createTaskForm">
                <input type="text" name="name" value="Title"/>
                <textarea placeholder="Description" name="Description" rows="7"/>
                <input type="datetime-local" name="deadline"/>
                <select name="groupId">
                    {props.groups?.map(
                        group => <option value={group.id} key={group.id}>{group.name}</option>)}
                </select>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}