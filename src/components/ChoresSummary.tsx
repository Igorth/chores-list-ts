import styles from './ChoresSummary.module.css';
import { Chore } from '../types/chore';

interface ChoresSummaryProps {
  chores: Chore[];
}
export function ChoresSummary({ chores }: ChoresSummaryProps) {
  const completedChores = chores.filter((chore) => chore.completed);

  return (
    <div className={styles.choresSummary}>
      <span className={styles.createdChores}>
        Tarefas criadas {chores.length}
      </span>
      <span className={styles.completedChores}>
        Concluidas {completedChores.length} de {chores.length}
      </span>
    </div>
  );
}
