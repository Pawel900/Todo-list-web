import React, {useState} from "react";

import styles from './TaskInput.module.css';

const TaskInput = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const taskHandler = (e) => {
        setEnteredValue(e.target.value);
    }

    const taskSubmitHandler = (e) => {
        e.preventDefault();
        if (enteredValue.trim().length === 0) return;
        localStorage.setItem('1', enteredValue);
        props.onAddTask(enteredValue);
        setEnteredValue('');

    }

    return (
        <form onSubmit={taskSubmitHandler} className={styles.background_div}>
            <label className={styles.label}>New Todo</label>
            <input type='text' placeholder="New Todo" value={enteredValue} onChange={taskHandler} className={styles.input} />
            <button type='submit' className={styles.button}>ADD TODO</button>
        </form>
    )
}

export default TaskInput;