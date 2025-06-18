'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { Home, Hash, User, Briefcase, Send } from 'lucide-react'

import NavigationItem from '@/components/layout/Navigation/NavigationItem'
import { NavigationConfig } from '@/components/layout/Navigation/types/NavigationConfig'

const iconProps = { width: 16, height: 16, className: 'text-navigation-icon' }
const navigationConfig: NavigationConfig[] = [
  {
    title: 'Page',
    url: '/',
    icon: <Home {...iconProps} />,
  },
  {
    title: 'Posts',
    url: '/posts',
    icon: <Hash {...iconProps} />,
  },
  {
    title: 'About',
    url: '/about',
    icon: <User {...iconProps} />,
  },
  {
    title: 'Work',
    url: '/work',
    icon: <Briefcase {...iconProps} />,
  },
  {
    title: 'Contact',
    url: '/contact',
    icon: <Send {...iconProps} />,
  },
  {
    title: 'Resume',
    url: '/download',
    icon: '?',
  },
]

const Navigation = () => {
  const pathname = usePathname()

  if (pathname === '/soon') return null

  return (
    <nav
      className={clsx(
        'absolute top-1/2 left-0 -translate-y-1/2 z-[999]', // vertically centered + fixed
        'py-2 px-2 flex flex-col items-center',
        'bg-navigation-bg',
        // Border logic
        'border-2 border-brand-secondary',
        'border-l-0 uwxl:border-l-2',
        // Radius logic
        'rounded-tr-3xl rounded-br-3xl uwxl:rounded-full',
        'transition-all duration-300',
        'shadow-none uwxl:shadow-lg'
      )}
    >
      {navigationConfig.map(({ title, icon, url }: NavigationConfig) => (
        <NavigationItem key={`${title}_${url}`} title={title} url={url} icon={icon} />
      ))}
    </nav>
  )
}

export default Navigation
