import styles from './footer.module.css'
export default function Footer({completedTodods, totalTodos}){
    return (
        <div className={styles.footer}>
            <span className={styles.item}>Completed Items: {completedTodods}</span>
            <span className={styles.item}>Total Items: {totalTodos}</span>
        </div>
    )
}