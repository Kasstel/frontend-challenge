import { useCats } from '../../utils/context/CatsContext'
import styles from './Header.module.css'

export function Header() {
  const { tab, setTab } = useCats()
  return (
    <header className={styles.header}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabs__button} ${tab === 'all' ? styles.active : ''}`}
          onClick={() => setTab('all')}
        >
          Все котики
        </button>
        <button
          className={`${styles.tabs__button} ${tab === 'favorites' ? styles.active : ''}`}
          onClick={() => setTab('favorites')}
        >
          Любимые котики
        </button>
      </div>
    </header>
  )
}
