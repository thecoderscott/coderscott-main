'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface NavigationItemProps {
  title: string
  url: string
  icon: ReactNode | null
}

const NavigationItem = ({ url, icon }: NavigationItemProps) => {
  const pathname = usePathname()
  const isActive = `/${pathname.split('/')[1]}` === url

  return (
    <a
      className={clsx(
        'rounded-full w-8 h-8 flex justify-center items-center bg-navigation-bg border-2 my-2',
        isActive ? 'border-brand-secondary' : 'border-brand-primary'
      )}
      href={url}
    >
      {icon}
      {/*{title}*/}
    </a>
  )
}

export default NavigationItem
