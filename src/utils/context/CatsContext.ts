import { createContext, useContext } from 'react'
import type { Cat } from '../../App'

export interface ICatsContext {
  cats: Cat[]
  favorites: Set<string>
  tab: string
  setTab: (tab: string) => void
  toggleFavorite: (id: string) => void
  loadMore: () => void
}

export const CatsContext = createContext<ICatsContext | null>(null)

export function useCats() {
  const ctx = useContext(CatsContext)
  if (!ctx) throw new Error('useCats must be inside CatsProvider')
  return ctx
}
