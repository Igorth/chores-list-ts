import { Chore } from '../types/chore';
import { ChoreItem } from './ChoreItem';

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
  );
}
