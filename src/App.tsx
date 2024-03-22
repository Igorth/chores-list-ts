import styles from './App.module.css';
import { AddChoresForm } from './components/AddChoresForm';
import { ChoresItem } from './components/ChoresItem';
import { Header } from './components/Header';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <AddChoresForm />
      <ChoresItem />
      <ChoresItem />
      <ChoresItem />
    </div>
  );
}
