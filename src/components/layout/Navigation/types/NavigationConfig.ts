import { ReactNode } from 'react'

export type NavigationConfig = {
  title: string
  url: string
  icon: ReactNode | null
  progress?: number
}
