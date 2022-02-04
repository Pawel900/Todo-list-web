import React, {useState, useRef} from "react";

import styles from './TaskInput.module.css';

const TaskInput = props => {
    const enteredRef = useRef();
    const [enteredValue, setEnteredValue] = useState('');

    const taskHandler = (e) => {
        setEnteredValue(e.target.value);
    }

    const taskSubmitHandler = (e) => {
        e.preventDefault();
        if (enteredValue.trim().length === 0) return;
        props.onAddTask(enteredValue);
        enteredRef.current.value = '';

    }

    return (
        <form onSubmit={taskSubmitHandler} className={styles.background_div}>
            <label className={styles.label}>New Todo</label>
            <input type='text' placeholder="New Todo" ref={enteredRef} onChange={taskHandler} className={styles.input} />
            <button type='submit' className={styles.button}>ADD TODO</button>
        </form>
    )
}

export default TaskInput;