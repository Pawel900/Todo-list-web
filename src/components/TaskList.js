import React from "react";
import TaskListItem from "./TaskListItem";

import styles from './TaskList.module.css';

const TaskList = props => {
    return (
        <ul className={styles.ul}>
            {props.items.map(item => (
                <TaskListItem key={item.id}>{item.text}</TaskListItem>
            ))}
        </ul>
    );
}

export default TaskList;