import { ClipboardText } from 'phosphor-react';
import { Chore } from '../types/chore';
import { ChoreItem } from './ChoreItem';
import styles from './ChoresList.module.css';

interface ChoresListProps {
  chores: Chore[];
  handleCompletedChange: (id: number, completed: boolean) => void;
  handleDelete: (id: number) => void;
}

export function ChoresList({
  chores,
  handleCompletedChange,
  handleDelete,
}: ChoresListProps) {
  const choresSorted = chores.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div>
        {choresSorted.map((chore) => (
          <ChoreItem
            key={chore.id}
            chore={chore}
            handleCompletedChange={handleCompletedChange}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      {chores.length === 0 && (
        <div className={styles.choreList}>
          <ClipboardText size={50} />
          <p className={styles.choreParagraphOne}>
            You don't have chores created yet.
          </p>
          <p>Create chores and organize your chores list.</p>
        </div>
      )}
    </>
  );
}
