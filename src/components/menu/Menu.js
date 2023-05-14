import React from 'react'
import Task from './task/Task'
import {getAllTasks, markDone} from "../../logic/tasks";
import CreateTaskMenu from "./CreateTaskMenu";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.refreshTasks = this.refreshTasks.bind(this)
        this.markTaskDone = this.markTaskDone.bind(this)
    }

    componentDidMount() {
        this.refreshTasks()
    }

    refreshTasks() {
        getAllTasks().then((r) => {
            this.setState({tasks: r})
        })
    }
    markTaskDone(taskId, done) {
        markDone(taskId, done)
            .then(() => getAllTasks().then(
                r => this.setState({tasks: r})
            ))
    }

    render() {
        const tasks = this.state?.tasks?.map((task) => {
            const deadline = new Date(task.deadline)
            return <Task
                name={task.name}
                onDone={this.markTaskDone}
                taskId={task.id}
                done={task.done}
                key={deadline}
                deadline={deadline}
            />
    })
        return (
            <div>
                <div>
                    {tasks}
                </div>
                <CreateTaskMenu refreshTasksCallback={this.refreshTasks}/>
            </div>
        )
    }
}