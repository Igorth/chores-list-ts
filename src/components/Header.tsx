import styles from './Header.module.css';
import choresLogo from '../assets/chores-logo.svg';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={choresLogo} alt="Chores List logo" />
    </div>
  );
}
