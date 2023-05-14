import React from 'react'
import Task from './task/Task'
import {getAllTasks, markDone} from "../../logic/tasks";
import CreateTaskMenu from "./task/CreateTaskMenu";
import CreateGroupMenu from "./group/CreateGroupMenu";
import {getGroups} from "../../logic/groups";
import Group from "./group/Group";
import './Menu.css';
import {Link} from "react-router-dom";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.refreshTasks = this.refreshTasks.bind(this)
        this.refreshGroups = this.refreshGroups.bind(this)
        this.markTaskDone = this.markTaskDone.bind(this)
    }

    componentDidMount() {
        this.refreshTasks()
        this.refreshGroups()
    }

    refreshTasks() {
        getAllTasks().then((r) => {
            this.setState({tasks: r})
        })
    }
    refreshGroups() {
        getGroups().then((r) => {
            this.setState({groups: r})
        })
    }
    markTaskDone(taskId, done) {
        markDone(taskId, done)
            .then(() => getAllTasks().then(
                r => this.setState({tasks: r})
            ))
    }

    render() {
        const renderedGroups = this.state?.groups?.map((group) => {
            return <Group
                id={group.id}
                key={group.name}
                name={group.name}
            />
        })
        const renderedTasks = this.state?.tasks?.map((task) => {
            const deadline = new Date(task.deadline)
            return <Task
                name={task.name}
                description={task.description}
                onDone={this.markTaskDone}
                taskId={task.id}
                done={task.done}
                key={deadline}
                deadline={deadline}
            />
        })
        return (
            <div className="menu">
                <div className="groupsBar">
                    <div>
                        <h1>Groups</h1>
                        {renderedGroups}
                    </div>
                    <CreateGroupMenu refreshGroupsCallback={this.refreshGroups}/>
                </div>
                <hr/>
                <div className="tasks">
                    {renderedTasks}
                </div>
                <hr/>
                <CreateTaskMenu groups={this.state?.groups} refreshTasksCallback={this.refreshTasks}/>
                <Link to="/login" className="loginButton">
                    Login
                </Link>
            </div>
        )
    }
}