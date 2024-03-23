import { useState } from 'react';
import styles from './App.module.css';
import { AddChoresForm } from './components/AddChoresForm';
import { ChoreItem } from './components/ChoreItem';
import { Header } from './components/Header';
import { dummyData } from './data/chores';

export function App() {
  const [chores, setChores] = useState(dummyData);

  function setChoreCompleted(id: number, completed: boolean) {
    setChores((prevChores) =>
      prevChores.map((chore) =>
        chore.id === id ? { ...chore, completed } : chore,
      ),
    );
  }

  function addChore(title: string) {
    setChores((prevChores) => [
      {
        id: prevChores.length + 1,
        title,
        completed: false,
      },
      ...prevChores,
    ]);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <AddChoresForm onSubmit={addChore} />
      {chores.map((chore) => (
        <ChoreItem
          key={chore.id}
          chore={chore}
          handleCompletedChange={setChoreCompleted}
        />
      ))}
    </div>
  );
}
