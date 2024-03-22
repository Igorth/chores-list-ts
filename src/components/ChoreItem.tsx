import { Trash } from 'phosphor-react';
import styles from './ChoreItem.module.css';
import { Chore } from '../types/chore';

interface ChoreItemProps {
  chore: Chore;
}

export function ChoreItem({ chore }: ChoreItemProps) {
  return (
    <div className={styles.choresItem}>
      <label className={styles.labelItem}>
        <input type="checkbox" />
        {chore.title}
        <button>
          <Trash size={22} />
        </button>
      </label>
    </div>
  );
}
