import React from "react";
import { FaTrash, FaPen } from "react-icons/fa";

import styles from './TaskListItem.module.css';

const TaskListItem = props => {
    
    const deleteItem = () => {
        props.onDelete(props.id);
        localStorage.removeItem(...Object.values(localStorage).filter(val => val === props.children));
    }

    const editItem = () => {
        props.onEdit(props.text);   
    }

    const completedTask = () => {
        document.getElementById(props.id).classList.toggle(`${styles.complete}`);
    }

    return (
        <div className={styles.background}>
            <li className={styles.li}>
                <div onClick={completedTask} id={props.id} >{props.children}</div>  
                <FaTrash className={styles.icon_trash} onClick={deleteItem}/>         
                <FaPen className={styles.icon_pen} onClick={editItem}/>         
            </li>
        </div>
    )
}

export default TaskListItem;