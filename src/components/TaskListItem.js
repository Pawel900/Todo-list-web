import React from "react";
import { FaTrash, FaPen } from "react-icons/fa";

import styles from './TaskListItem.module.css';

const TaskListItem = props => {
    
    const deleteItem = () => {
        props.onDelete(props.id);
        localStorage.removeItem(...Object.values(localStorage).filter(val => val === props.children));
    }

    return (
        <div className={styles.background}>
            <li className={styles.li}>
                <div>{props.children}</div>  
                <FaTrash className={styles.icon_trash} onClick={deleteItem}/>         
                <FaPen className={styles.icon_pen}/>         
            </li>
        </div>
    )
}

export default TaskListItem;