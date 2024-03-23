import { useState } from 'react';
import styles from './AddChoresForm.module.css';

interface AddChoresFormProps {
  onSubmit: (title: string) => void;
}

export function AddChoresForm({ onSubmit }: AddChoresFormProps) {
  const [input, setInput] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) {
      return;
    }

    onSubmit(input);
    setInput('');
  }

  return (
    <form className={styles.addChores} onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">Add</button>
    </form>
  );
}
