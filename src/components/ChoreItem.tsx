import { Trash } from 'phosphor-react';
import styles from './ChoreItem.module.css';
import { Chore } from '../types/chore';

interface ChoreItemProps {
  chore: Chore;
  handleCompletedChange: (id: number, completed: boolean) => void;
  handleDelete: (id: number) => void;
}

export function ChoreItem({
  chore,
  handleCompletedChange,
  handleDelete,
}: ChoreItemProps) {
  return (
    <div className={styles.choresItem}>
      <label className={styles.labelItem}>
        <input
          type="checkbox"
          onChange={(e) => handleCompletedChange(chore.id, e.target.checked)}
          checked={chore.completed}
        />
        <span className={chore.completed ? styles.completedChore : ''}>
          {chore.title}
        </span>
        <button onClick={() => handleDelete(chore.id)}>
          <Trash size={22} />
        </button>
      </label>
    </div>
  );
}
