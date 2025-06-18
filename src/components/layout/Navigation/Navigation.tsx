import { Home, Hash, User, Briefcase, Send } from 'lucide-react'

import NavigationItem from '@/components/layout/Navigation/NavigationItem'
import { NavigationConfig } from '@/components/layout/Navigation/types/NavigationConfig'
import clsx from 'clsx'

const iconProps = { width: 16, height: 16, className: 'text-navigation-icon' }
const navigationConfig: NavigationConfig[] = [
  {
    title: 'Home',
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
  return (
    <nav
      className={clsx(
        'absolute top-50 left-0 z-999',
        'py-2 px-2 flex flex-col items-center',
        'border-l-0 uwxl:border-l-2 border-2 border-brand-secondary rounded-tr-3xl rounded-br-3xl uwxl:rounded-full',
        'bg-navigation-bg'
      )}
    >
      {navigationConfig.map(({ title, icon, url }: NavigationConfig) => (
        <NavigationItem key={`${title}_${url}`} title={title} url={url} icon={icon} />
      ))}
    </nav>
  )
}

export default Navigation
