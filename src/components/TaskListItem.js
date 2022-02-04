import React from "react";

const TaskListItem = props => {
    return (
        <li>
            <div>{props.children}</div>
        </li>
    )
}

export default TaskListItem;