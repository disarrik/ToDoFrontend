import React from 'react'

export default class Task extends React.Component {
    render() {
        return(
            <div className="task">
                <input
                    checked={this.props.done}
                    type="checkbox"
                    onChange={() => this.props.onDone(this.props.taskId, !this.props.done)}
                />
                <h2>{this.props.name}</h2>
                <span>
                    {this.props.deadline.toISOString().slice(0,19).replace('T', ' ')}
                </span>
            </div>
        )
    }
}