import React from 'react'
import './Task.css'

export default class Task extends React.Component {
    render() {
        return(
            <div className="task">
                <input
                    checked={this.props.done}
                    type="checkbox"
                    className="done"
                    onChange={() => this.props.onDone(this.props.taskId, !this.props.done)}
                />
                <div className="taskInfo">
                    <div className="taskNameAndDescription">
                        <h2>{this.props.name}</h2>
                        <p>{this.props.description}</p>
                    </div>
                    <span className="deadline">
                        {this.props.deadline.toISOString().slice(0,19).replace('T', ' ')}
                    </span>
                </div>
            </div>
        )
    }
}