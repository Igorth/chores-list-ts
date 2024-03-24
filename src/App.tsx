import { useState } from 'react';
import styles from './App.module.css';
import { AddChoresForm } from './components/AddChoresForm';
import { Header } from './components/Header';
import { dummyData } from './data/chores';
import { ChoresList } from './components/ChoresList';
import { ChoresSummary } from './components/ChoresSummary';

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
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevChores,
    ]);
  }

  function deleteChore(id: number) {
    setChores((prevChores) => prevChores.filter((chore) => chore.id !== id));
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <AddChoresForm onSubmit={addChore} />
      <ChoresSummary chores={chores} />
      <ChoresList
        chores={chores}
        handleCompletedChange={setChoreCompleted}
        handleDelete={deleteChore}
      />
    </div>
  );
}
