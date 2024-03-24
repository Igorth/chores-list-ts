import { useState } from 'react';
import styles from './App.module.css';
import { AddChoresForm } from './components/AddChoresForm';
import { Header } from './components/Header';
import { dummyData } from './data/chores';
import { ChoresList } from './components/ChoresList';

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

  function deleteChore(id: number) {
    setChores((prevChores) => prevChores.filter((chore) => chore.id !== id));
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <AddChoresForm onSubmit={addChore} />
      <ChoresList
        chores={chores}
        handleCompletedChange={setChoreCompleted}
        handleDelete={deleteChore}
      />
    </div>
  );
}
