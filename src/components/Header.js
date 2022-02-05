import styles from './Header.module.css';

const Header = props => {
    return (
        <div className={styles.div}>
            <h1 className={styles.font}>Todo List</h1>
            <p className={styles.font}>A simple React Todo List App</p>
            <hr/>
        </div>
    )
}

export default Header;