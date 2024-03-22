import { Trash } from 'phosphor-react';
import styles from './ChoresItem.module.css';

export function ChoresItem() {
  return (
    <div className={styles.choresItem}>
      <label className={styles.labelItem}>
        <input type="checkbox" />
        <span>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
        <button>
          <Trash size={22} />
        </button>
      </label>
    </div>
  );
}
