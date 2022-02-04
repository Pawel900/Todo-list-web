import React from "react";
import TaskListItem from "./TaskListItem";

const TaskList = props => {
    return (
        <ul>
            {props.items.map(item => (
                <TaskListItem key={item.id}>{item.text}</TaskListItem>
            ))}
        </ul>
    );
}

export default TaskList;