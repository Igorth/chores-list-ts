import styles from './App.module.css';
import { AddChoresForm } from './components/AddChoresForm';
import { ChoreItem } from './components/ChoreItem';
import { Header } from './components/Header';
import { dummyData } from './data/chores';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <AddChoresForm />
      {dummyData.map((chore) => (
        <ChoreItem chore={chore} />
      ))}
    </div>
  );
}
