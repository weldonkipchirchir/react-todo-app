import styles from "./todoitem.module.css";

export default function TodoItem({ todo, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray=todos.map((todo)=> todo.name ===name ? {...todo, done:!todo.done}: todo)
    setTodos(newArray)
    console.log(todos)
}

const className = todo.done ? styles.completed : ""

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={()=>handleClick(todo.name)}>{todo.name}</span>
        <span>
          <button onClick={() => handleDelete(todo)} className={styles.delete}>
            Delete
          </button>
        </span>
      </div>

      <hr />
    </div>
  );
}   
