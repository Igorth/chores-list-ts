import styles from './AddChoresForm.module.css';

export function AddChoresForm() {
  return (
    <form className={styles.addChores}>
      <input placeholder="Adicione uma nova tarefa" />
      <button type="submit">Add</button>
    </form>
  );
}
