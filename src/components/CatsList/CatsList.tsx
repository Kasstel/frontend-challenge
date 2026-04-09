import { useEffect, useRef } from 'react'
import { useCats } from '../../utils/context/CatsContext'
import { CatCard } from '../CatCard/CatCard'
import styles from './CatsList.module.css'


export function CatsList() {
  const { cats, favorites, tab, toggleFavorite, loadMore } = useCats()

  const visibleCats =
    tab === 'all' ? cats : cats.filter((cat) => favorites.has(cat.id))

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bottomRef.current) return
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore()
      }
    })

    observer.observe(bottomRef.current)

    return () => observer.disconnect()
  }, [loadMore])

  return (
    <div className={styles.catsList}>
      {visibleCats.map((cat) => (
        <CatCard
          key={cat.id}
          cat={cat}
          isFavorite={favorites.has(cat.id)}
          onToggleLike={() => toggleFavorite(cat.id)}
        />
      ))}
      {tab === 'all' ? (
        <div className={styles.more} ref={bottomRef}>
          ...загружаем еще котиков
        </div>
      ) : null}
    </div>
  )
}
