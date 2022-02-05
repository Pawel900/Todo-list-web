import React from "react";

import styles from './TaskListItem.module.css';

const TaskListItem = props => {
    return (
        <div className={styles.background}>
            <li className={styles.li}>
                <div>{props.children}</div>
            </li>
        </div>
    )
}

export default TaskListItem;