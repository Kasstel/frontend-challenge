import { useCallback, useEffect, useState, type ReactNode } from 'react'
import type { Cat } from '../../App'
import { CatsContext } from './CatsContext'
import { fetchApi } from '../api'

export function CatsProvider({ children }: { children: ReactNode }) {
  const [cats, setCats] = useState<Cat[]>([])
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? new Set<string>(JSON.parse(saved)) : new Set<string>()
  })
  const [tab, setTab] = useState<string>('all')
  const [page, setPage] = useState(1)

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify([...favorites]))
  }, [favorites])

  useEffect(() => {
    fetchApi(page).then((newCats) => {
      if (newCats)
        setCats((prev) => {
          const existingIds = new Set(prev.map((c) => c.id))
          const unique = newCats.filter((c: Cat) => !existingIds.has(c.id))
          return [...prev, ...unique]
        })
    })
  }, [page])

  function toggleFavorite(id: string) {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const loadMore = useCallback(()=>{
    return setPage((prev) => prev + 1)
  },[])

  return (
    <CatsContext.Provider
      value={{ cats, favorites, tab, setTab, toggleFavorite, loadMore }}
    >
      {children}
    </CatsContext.Provider>
  )
}
