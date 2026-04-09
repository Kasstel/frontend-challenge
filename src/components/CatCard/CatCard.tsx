import { useState } from 'react'
import type { Cat } from '../../App'
import { HeartIcon } from '../HeartIcon'
import styles from './CatCard.module.css'

interface CatCardProps {
  cat: Cat
  isFavorite: boolean
  onToggleLike: () => void
}

export function CatCard({ cat, isFavorite, onToggleLike }: CatCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <article className={styles.card}>
        <img src={cat.url} className={styles.image} />
        <button className={styles.likeButton} onClick={onToggleLike} onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}>
          <HeartIcon filled={isFavorite || hovered} />
        </button>
      </article>
    </>
  )
}
