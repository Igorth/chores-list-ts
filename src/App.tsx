import styles from './App.module.css';
import { AddChoresForm } from './components/AddChoresForm';
import { ChoresList } from './components/ChoresList';
import { Header } from './components/Header';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <AddChoresForm />
      <ChoresList />
    </div>
  );
}
